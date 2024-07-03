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

// chunk => pedaço que a gente leu da stream de leitura, o que está sendo enviado
// encoding => como que a info está codificada
// callback => funcão que será chamada quando a stream de escrita terminar de executar aquela informação


import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {

    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if(i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                // chunk
                this.push(buf)
            }
        }, 1000)

    }

}

class MultiplyByTebStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTebStream())
