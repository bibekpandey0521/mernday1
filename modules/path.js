import path from "path";
import  url from "url";
const filePath = 'city/dist/bkt/srijanagar/dharatol/video.mp4';

//baseName() -> filename
console.log(path.basename(filePath));

//dirname()
console.log(path.dirname(filePath));

//extname
console.log(path.extname(filePath));

//parse
console.log(path.parse(filePath));


// __dirname  
// available for commonjs
// __filename

const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename)

const __dirname = path.dirname(__filename);
console.log(__dirname)
