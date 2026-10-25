<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$catFile = __DIR__ . '/../../src/data/categories.json';
$prodFile = __DIR__ . '/../../src/data/products.json';

function readJson($path) {
    if (!file_exists($path)) return [];
    $raw = file_get_contents($path);
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

$categories = readJson($catFile);
$products = readJson($prodFile);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $enriched = array_map(function($c) use ($products) {
        $cSlug = $c['slug'] ?? '';
        $cName = strtolower($c['name'] ?? '');
        $count = count(array_filter($products, function($p) use ($cSlug, $cName) {
            $pSlug = $p['categorySlug'] ?? '';
            $pCat = strtolower($p['category'] ?? '');
            return $pSlug === $cSlug || strpos($pCat, $cName) !== false;
        }));
        return array_merge($c, ['count' => $count]);
    }, $categories);

    echo json_encode([
        'success' => true,
        'categories' => $enriched
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($method === 'POST') {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);

    if (!$body || empty($body['name'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Category name is required']);
        exit;
    }

    $name = trim($body['name']);
    $slug = $body['slug'] ?? strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/', '-', $name), '-'));

    $exists = false;
    foreach ($categories as $c) {
        if ($c['slug'] === $slug) {
            $exists = true;
            break;
        }
    }

    if (!$exists) {
        $newCat = ['name' => $name, 'slug' => $slug, 'count' => 0];
        $categories[] = $newCat;
        file_put_contents($catFile, json_encode($categories, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
        echo json_encode(['success' => true, 'category' => $newCat]);
    } else {
        echo json_encode(['success' => true, 'message' => 'Category already exists']);
    }
    exit;
}
