const http = require("http");
const url = require("url");
const fs = require("fs");
const { renderToString } = require("react-dom/server");
const React = require("react");

const Home = require("./starter");

const html = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const clientJS = fs.readFileSync(`${__dirname}/client.js`, "utf-8");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === "/") {
    const renderReact = renderToString(<Home />);
    const renderHtml = html.replace("%%CONTENT%%", renderReact);

    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(renderHtml);
  } else if (pathname === "/client") {
    res.writeHead(200, {
      "Content-type": "application/javascript",
    });
    res.end(clientJS);
  } else {
    res.end("Not found");
  }
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
});
