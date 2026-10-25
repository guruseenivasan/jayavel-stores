<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$file = __DIR__ . '/../../src/data/products.json';

function getProducts($path) {
    if (!file_exists($path)) {
        return [];
    }
    $content = file_get_contents($path);
    $data = json_decode($content, true);
    return is_array($data) ? $data : [];
}

function saveProducts($path, $products) {
    file_put_contents($path, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}

$method = $_SERVER['REQUEST_METHOD'];
$products = getProducts($file);

if ($method === 'GET') {
    $id = $_GET['id'] ?? null;
    $slug = $_GET['slug'] ?? null;

    // Single product lookup
    if ($id || $slug) {
        $single = null;
        foreach ($products as $p) {
            if (($id && ($p['id'] ?? '') === $id) || ($slug && ($p['slug'] ?? '') === $slug)) {
                $single = $p;
                break;
            }
        }
        if ($single) {
            echo json_encode([
                'success' => true,
                'product' => $single
            ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            exit;
        } else {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'error' => 'Product not found'
            ]);
            exit;
        }
    }

    $category = $_GET['category'] ?? null;
    $q = $_GET['q'] ?? null;

    $filtered = $products;

    if ($category && $category !== 'all') {
        $filtered = array_values(array_filter($filtered, function($p) use ($category) {
            $catSlug = $p['categorySlug'] ?? '';
            $catName = strtolower($p['category'] ?? '');
            return $catSlug === $category || strpos($catName, strtolower($category)) !== false;
        }));
    }

    if ($q) {
        $lower = strtolower($q);
        $filtered = array_values(array_filter($filtered, function($p) use ($lower) {
            return (isset($p['title']) && strpos(strtolower($p['title']), $lower) !== false) ||
                   (isset($p['tamilTitle']) && strpos(strtolower($p['tamilTitle']), $lower) !== false) ||
                   (isset($p['description']) && strpos(strtolower($p['description']), $lower) !== false) ||
                   (isset($p['category']) && strpos(strtolower($p['category']), $lower) !== false);
        }));
    }

    echo json_encode([
        'success' => true,
        'count' => count($filtered),
        'products' => $filtered
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($method === 'POST') {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);

    if (!$body || empty($body['title'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Title is required']);
        exit;
    }

    if (empty($body['id'])) {
        $body['id'] = 'JV-' . rand(1000, 9999);
    }

    if (empty($body['slug'])) {
        $slug = strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/', '-', $body['title']), '-'));
        $body['slug'] = $slug ?: 'product-' . time();
    }

    if (!empty($body['image'])) {
        $body['image'] = ltrim($body['image'], '/');
    }

    // Prepend to top
    array_unshift($products, $body);
    saveProducts($file, $products);

    echo json_encode([
        'success' => true,
        'product' => $body
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($method === 'PUT') {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);

    if (!$body || empty($body['id'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Product ID is required']);
        exit;
    }

    $id = $body['id'];
    $found = false;
    $updatedProduct = null;

    foreach ($products as &$p) {
        if ($p['id'] === $id) {
            $p = array_merge($p, $body);
            $updatedProduct = $p;
            $found = true;
            break;
        }
    }

    if ($found) {
        saveProducts($file, $products);
        echo json_encode([
            'success' => true,
            'product' => $updatedProduct
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Product not found']);
    }
    exit;
}

if ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    if (!$id) {
        $raw = file_get_contents('php://input');
        $body = json_decode($raw, true);
        $id = $body['id'] ?? null;
    }

    if (!$id) {
        http_response_code(400);
        echo json_encode(['error' => 'Product ID is required']);
        exit;
    }

    $initialCount = count($products);
    $products = array_values(array_filter($products, function($p) use ($id) {
        return ($p['id'] ?? '') !== $id && ($p['slug'] ?? '') !== $id;
    }));

    saveProducts($file, $products);

    echo json_encode([
        'success' => true,
        'deleted' => count($products) < $initialCount
    ]);
    exit;
}
