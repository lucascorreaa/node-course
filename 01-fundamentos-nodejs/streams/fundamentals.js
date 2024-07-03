// streams => node

// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb - 100000
// POST /upload import.csv

// 10mb/s - 10

// 100s => Inserções no banco de dados

// 10mb/s => 10.000

// Readable Streams Lendo aos poucos  
// Writable Streams = enviando aos poucos

// stdIn - stdOut

// Case:
// process.stdin   Readable
//     .pipe(process.stdout) Writable


import { Readable } from 'node:stream'

class oneToHundredStream extends Readable {

    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if(i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)

    }

}

new oneToHundredStream()
.pipe(process.stdout)
