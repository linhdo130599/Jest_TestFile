import  {readFileSync} from 'fs';
import  {join} from 'path'


// @ts-ignore
const pathToJSON:string = join([__dirname,'./test.json']);
const dataBuffer= readFileSync(pathToJSON);
const dataConvert = JSON.parse(dataBuffer.toString('utf-8'));
const {data} = dataConvert;
console.log(data)