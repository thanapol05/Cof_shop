require('../models/database');
const Category = require('../models/Category')


exports.homepage = async(req, res) =>{

    res.render('menu');

}

async function insertDymmyCategoryData(){
    try {
        await Category.insertMany([
            {
                "name":"Arabica",
                "detail":"เมล็ดกาแฟอาราบิก้าเป็นหนึ่งในประเภทที่ได้รับความนิยมมากที่สุด และเชื่อกันว่าเป็นหนึ่งในกาแฟสายพันธุ์แรก ๆ ที่เคยปลูกโดยใช้รากมาตั้งแต่ 1,000 ปีก่อนคริสตกาล โดยทั่วไปเมล็ดกาแฟจะมีรูปร่างเป็นวงรี มีรอยจีบตรงกลางเด่นชัด และมีขนาดใหญ่กว่าเมล็ดกาแฟโรบัสต้านักดื่มกาแฟต่างชื่นชอบเมล็ดกาแฟเหล่านี้ ซึ่งขึ้นชื่อเรื่องรสชาติที่ให้ความรู้สึกสดชื่นและซับซ้อน มักจะมีรสชาติที่หวานละมุนกว่าด้วยโทนสีของผลไม้ ดอกไม้ ช็อกโกแลต และถั่ว แม้ว่าจะมีความเป็นกรดจะสูงกว่าก็ตามโดยทั่วไป เมล็ดกาแฟอาราบิก้ามีราคาแพงกว่าโรบัสต้า เป็นเพราะมีความซับซ้อนมากกว่า และต้องมีข้อกำหนดในการเพาะปลูกโดยเฉพาะมากกว่า เช่น สภาพอากาศ และระดับความสูงในการเจริญเติบโต โดยปกติแล้ว เมล็ดกาแฟอาราบิก้าจะปลูกที่ระดับความสูงระหว่าง 500 ม. ถึง 2,500 ม. เป็นกาแฟที่มีปริมาณคาเฟอีนต่ำ ปัจจุบันแถบลาตินอเมริกา โดยเฉพาะบราซิลเป็นผู้ผลิตกาแฟอาราบิก้ารายใหญ่ที่สุด",
                "image":"Ara.jpg"
            },
            {
                "name":"Robusta",
                "detail":"โดยทั่วไป โรบัสต้าจะปลูกในแอฟริกา เวียดนาม และอินโดนีเซีย โรบัสต้ามีระดับความเป็นกรดน้อยกว่ากาแฟอาราบิก้า ซึ่งหมายความว่ารสชาติจะหวานน้อยกว่า เพราะมีความเป็นกรดที่ปกติกว่า อีกทั้งส่วนผสมของรสชาติที่นุ่มลึกและเข้มข้นกว่า โรบัสต้าจะให้กลิ่นโทนไม้หรือยางไหม้ ซึ่งเป็นตัวเลือกยอดนิยมสำหรับเอสเปรสโซ เนื่องจากมีรสชาติเข้มข้นและชั้นโฟมหนานุ่มโรบัสต้าจะปลูกที่ระดับความสูงไม่เกิน 1,000 ม. และให้ผลผลิตเร็วกว่าอาราบิก้าซึ่งต้องใช้เวลาหลายปีกว่าผลจะแก่ อีกทั้งยังออกผลต่อต้นมากกว่า  นอกจากนี้ ยังมีความเสี่ยงต่อศัตรูพืชและสภาพอากาศน้อยกว่า และนี่คือสาเหตุสำคัญว่าทำไมโรบัสต้าจึงมีราคาถูกกว่าอาราบิก้า อีกประการหนึ่งที่พึงทราบคือเมล็ดกาแฟโรบัสต้ามีปริมาณคาเฟอีนสูงกว่าโดยทั่วไป เมล็ดกาแฟจากสายพันธุ์โรบัสต้ามีขนาดเล็กและกลมกว่าเมล็ดกาแฟอาราบิก้า มีสีอ่อนกว่า และรอยจีบตรงกลางเด่นชัดน้อยกว่า",
                "image":"robus.jpg"
            },
            {
                "name":"Excelsa",
                "detail":"แม้จะมีรูปลักษณ์ภายนอกของเมล็ดและรสชาติใกล้เคียงกับโรบัสต้า แต่เอ็กเซลซ่ากลับไม่ได้รับความนิยมแพร่หลายเท่ากับโรบัสต้า แต่ชาวแอฟริกันและบ้านเกิดของกาแฟ (กาแฟได้รับการค้นพบครั้งแรกในเยเมนและเอธิโอเปีย ส่วนเอ็กเซลซ่าเป็นที่รู้จักครั้งแรกในปี 1904) พวกเขารักรสชาติเข้มข้นและความขมพร่าของเอ็กเซลซ่าอย่างมาก ถึงขนาดที่ดื่มกาแฟสายพันธุ์นี้ได้ตลอดวันทั้งยังปลูกง่าย ดูแลง่าย ทนแล้งและทนโรคได้ดี ให้ผลผลิตสูง ส่วนเมล็ดแก่ของเอ็กเซลซ่ายังให้รสชาติกลมกล่อมและหอมมันคล้ายกับกาแฟอราบิก้าอีกด้วย",
                "image":"excell.jpg"
            },
            {
                "name":"Liberica",
                "detail":"บ้านเกิดของลิเบอริก้าอยู่ที่ไลบีเรียและไอวอรีโคสต์ ส่วนรสชาติก็ใกล้เคียงกับอราบิก้าแต่มีรสเปรี้ยวอมหวานของผลเบอร์รี่มากกว่า แต่มีความทนทานต่อโรคได้ดีกว่า รักอากาศร้อนชื้นและน้ำชุ่มๆ นอกจากนี้ชาวไอวอรีโคสต์และมาดากัสก้ายังนิยมนำไปพัฒนาสายพันธุ์กับกาแฟสายพันธุ์อื่น ส่วนบาริสต้าเองก็นิยมนำไปเบลนด์เข้ากับกาแฟอื่นๆ เพื่อเพิ่มความเข้มข้นและเสริมรสให้มีเอกลักษณ์มากขึ้น แม้จะได้ชื่อว่าเป็นกาแฟที่มีคุณภาพต่ำกว่าสายพันธุ์อื่น แต่ลิเบอริก้ากำลังได้รับความนิยมแพร่หลายในประเทศแถบสแกนดิเนเวีย",
                "image":"liberica.jpg"
            },
        ]);

    } catch (error) {
        console.log('err',+error)
        
    }
}

insertDymmyCategoryData();