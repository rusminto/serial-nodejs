const _serial = require('./class/serial.class.js')
const serial = new _serial("/dev/serial/by-id/usb-1a86_USB_Serial-if00-port0", 9600)
// const serialBypass = new _serial("/dev/serial/by-id/usb-1a86_USB2.0-Ser_-if00-port0", 9600)

async function main(){
    const loop = async () => {
        let data = JSON.stringify([
            {
                "action": 0
            },
            {
                "action": 1
            }
        ])
        serial.println(data)
        console.log('SENT SERIAL : ',data);
        await new Promise(r => setTimeout(r, 100));

        // data = JSON.stringify([
        //     {
        //         "action": 1
        //     },
        //     {
        //         "action": 1
        //     }
        // ])
        // serial.println(data)
        // console.log('SENT SERIAL : ',data);
        // await new Promise(r => setTimeout(r, 2000));

        // let dataBypass = JSON.stringify([
        //     {
        //         "action": 1
        //     },
        //     {
        //         "action": 1
        //     }
        // ])
        // serialBypass.println(dataBypass)
        // console.log('SENT SERIAL BYPASS : ', dataBypass);
        // await new Promise(r => setTimeout(r, 2000));

        await loop()
    }

    // serial.on("data", (data) => {
    //     console.log('RESPONSE :',data);
    // })
    // serialBypass.on("data", (data2) => {
    //     console.log('RESPONSE BYPASS :',data2);
    // })

    await loop()
}

main()
