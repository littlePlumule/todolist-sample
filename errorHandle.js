function errorHandle(res, headers) {
  res.writeHead(404, headers);
  res.write(JSON.stringify({
    "status": "false",
    "message": "欄位未填寫正確 or 無此 todo id",
  }));
  res.end();
}

module.exports = errorHandle;
