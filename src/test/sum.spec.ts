import {sum} from "../sum";
import  {readFileSync} from 'fs';

const dataFromJSON = require('./test.json')
// import {ImportMock} from "ts-mock-imports";

describe("Test",   function() {
    // @ts-ignore
    //
    //     it  ("add ",()=>{
    //             const {a,b} = dataFromJSON;
    //             expect(sum(a,b))
    //     })


    // it("add 1+2 to equal 3", async function() {
        // @ts-ignore
        // const dataBuffer=await  readFileSync(pathToJSON);
        // const dataConvert = JSON.parse(dataBuffer.toString('utf-8'));
        // const {a ,b} = dataFromJSON;
        // //
        // // expect( sum(0,0));
        // // expect( sum(6,5));
        // // expect( sum(6,6));
        // // expect( sum(5,5));
        // expect( sum(a,b));

        // for (let index = 0 ;index < dataFromJSON.length ; index++){
        //     const {a ,b} = dataFromJSON[index];
        //     expect( sum(a,b));
        // }
        //
        // expect(sum(12,3))

        test.each(dataFromJSON)(
            " %p ",
            (params)=>{
                const {a,b} = params;
                const result = sum(a,b);
                expect(result);
            }
        )

    // }
    // );
    // it("add 1+2 to equal 3", () => {
    //      // const object = {b:0,a:8};
    //      // let paramters: any = object;
    //      // // SerializationHelper.fillFromJSON(JSON.stringify(object),
    //      // //    paramters);
    //      sum.apply(null, [0,8]);
    //      // ImportMock.restore();
    // });
    // it ( "add 1+2 to equal balanha", function (){
    //     let a = sum(2,1)
    // });
});

