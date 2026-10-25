<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$uploadDir = __DIR__ . '/../../public/uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

// 1. JSON Base64 dataUrl
if (strpos($contentType, 'application/json') !== false) {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);

    if (empty($body['dataUrl'])) {
        http_response_code(400);
        echo json_encode(['error' => 'No dataUrl provided']);
        exit;
    }

    if (preg_match('/^data:image\/([a-zA-Z+]+);base64,(.+)$/', $body['dataUrl'], $matches)) {
        $ext = ($matches[1] === 'jpeg' || $matches[1] === 'jpg') ? 'jpg' : 'png';
        $decoded = base64_decode($matches[2]);
        $baseName = preg_replace('/[^a-zA-Z0-9.-]/', '_', strtolower($body['filename'] ?? 'product'));
        $baseName = preg_replace('/\.[^.]+$/', '', $baseName);
        $fileName = 'white-' . time() . '-' . $baseName . '.' . $ext;

        file_put_contents($uploadDir . $fileName, $decoded);

        echo json_encode([
            'success' => true,
            'url' => 'uploads/' . $fileName,
            'filename' => $fileName,
            'size' => strlen($decoded),
            'whiteStandardized' => true
        ]);
        exit;
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid dataUrl']);
        exit;
    }
}

// 2. Multipart form file
if (!empty($_FILES['file']['tmp_name'])) {
    $origName = $_FILES['file']['name'];
    $ext = pathinfo($origName, PATHINFO_EXTENSION) ?: 'jpg';
    $baseName = pathinfo($origName, PATHINFO_FILENAME);
    $cleanName = preg_replace('/[^a-zA-Z0-9.-]/', '_', strtolower($baseName));
    $fileName = 'upload-' . time() . '-' . $cleanName . '.' . $ext;

    if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadDir . $fileName)) {
        echo json_encode([
            'success' => true,
            'url' => 'uploads/' . $fileName,
            'filename' => $fileName
        ]);
        exit;
    }
}

http_response_code(400);
echo json_encode(['error' => 'No image received']);
