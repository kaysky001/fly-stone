var express = require('express');
var fs = require('fs');

module.exports = {
    pdfCreate: (req, res, next) => {
        PDFDocument = require('pdfkit');
        fs = require('fs');

        //Create a document
        doc = new PDFDocument

        doc.fontSize(20)


        doc.rect(50, 50, 500, 700)
            .lineWidth(1)
            .stroke('#b4b4b4')
            //表題
        doc.font('../../fonts/ipaexm.ttf')
            .text('在職証明書', 240, 60)

        doc.fontSize(13)
            //宛名
        doc.text('田中', 70, 140)
        doc.text('殿:', 130, 140)
            //氏名
        doc.text('氏 名', 70, 180)
        doc.text('小泉', 130, 200)
            //住所
        doc.text('住 所', 70, 240)
        doc.text('東京都新宿区西新宿2丁目8番地1羽石ビル5階 888室', 130, 260)
            //生年月日
        doc.text('生年月日', 70, 300)
        doc.text('1999年12月31日', 130, 320)
            //契約期間
        doc.text('契約期間', 70, 340)
        doc.text('2020年12月31日', 130, 360)
        doc.text('～', 250, 360)
        doc.text('長期', 290, 360)
            //契約文章
        doc.text('上記のものが弊社の社員であり、月収入　　', 70, 400)
        doc.text('30', 320, 400)
        doc.text('万円(残業代は別途精算)', 350, 400)
        doc.text('であることを証明いたします。', 70, 420)
            //発行日
        doc.text('2020年10月31日', 310, 560)
            //会社住所
        doc.text('住　所', 270, 590)
        doc.text('東京都大東区浅草橋2丁目25番7号長嶋エレガンスビル5階', 330, 590)
            //事業所名
        doc.text('事業所名', 270, 630)
        doc.text('羽石株式会社', 330, 630)
        doc.text('TEL:03-5839-2838', 330, 650)
            //代表者名
        doc.text('代表者名', 270, 670)
        doc.text('崔　向東', 330, 670)

        doc.pipe(fs.createWriteStream('在籍証明書.pdf'))

        //Finalize PDF file
        doc.end()
    }
}