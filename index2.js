const _serial = require('./class/serial.class.js')
const serialBypass = new _serial("/dev/serial/by-id/usb-1a86_USB2.0-Ser_-if00-port0", 9600)

async function main(){
    const loop = async () => {

        let dataBypass = JSON.stringify([
            {
                "action": 1
            },
            {
                "action": 1
            }
        ])
        serialBypass.println(dataBypass)
        console.log('SENT SERIAL BYPASS : ', dataBypass);
        await new Promise(r => setTimeout(r, 4000));

        await loop()
    }

    serialBypass.on("data", (data2) => {
        console.log('RESPONSE BYPASS :',data2);
    })

    await loop()
}

main()
