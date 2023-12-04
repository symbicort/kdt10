const Visitor = require('../model/Visitor');

// GET /
exports.main = (req, res) => {
    res.render('index');
}

// GET /visitor
exports.get_visitors = (req, res) => {
    // [Before]
    // console.log(Visitor.getVisitors()); // [ {}, {}]
    // res.render('visitor', { data: Visitor.getVisitors() });

    // [After]
    // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
    // 콜백함수를 써준 이유 -> 비동기 처리를 하기위해서 
    // 1) Visitor.getVisitors() // 함수 호출
    // 2) 모델에서 데이터값 받은 후에 콜백 함수 실행
    Visitor.getVisitors((result) => {
        // 모델에 rows를 result라는 변수명으로 받음
        console.log('Cvisitor.js >', result);
        res.render('visitor', { data: result });
    })
}

// POST /visitor
exports.post_visitor = (req, res) => {
    console.log(req.body);
    const { name, comment } = req.body;
    // 요청 시 컨트롤러에서 모델에 필요한 값을 넘겨줘야 함
    // Visitor.postVisitor( view에서 받아온 데이터, 콜백 함수 ) 호출
    Visitor.postVisitor(req.body, (result) => {
        // result: rows.insertId => ex) 3
        console.log(result);
        res.send({ id: result, name, comment });
    })
}

// GET /visitor => localhost:PORT/visitor?id=N
exports.get_visitor = (req, res) => {
    console.log(req.query); // { id: '1' }
    console.log(req.query.id);

    // 모델에 함수 호출
    Visitor.getVisitor(req.query.id, (result) => {
        // result: rows[0] -> { id: 1, name: '홍길동', comment: '내가 왔다.' }
        console.log('get_visitor Cvisitor.js >', result);
        res.send(result);
    })
}

// GET /visitor/:id => localhost:PORT/visitor/:id
exports.get_visitor2 = (req, res) => {
    console.log(req.params); // { id: '1' }
    console.log(req.params.id);

    // 모델에 함수 호출
    Visitor.getVisitor(req.params.id, (result) => {
        // result: rows[0] -> { id: 1, name: '홍길동', comment: '내가 왔다.' }
        console.log('get_visitor2 Cvisitor.js >', result);
        res.send(result);
    })
}

// PATCH /visitor
exports.patch_visitor = (req, res) => {
    console.log(req.body); // { id: 4, name: '바나나맛', comment: '우유' }

    Visitor.patchVisitor(req.body, (result) => {
        console.log('patchVisitor Cvisitor.js >', result);
        res.send('수정 성공!');
    })
}

// DELETE /visitor
exports.delete_visitor = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);

    Visitor.deleteVisitor(req.body.id, (result) => {
        console.log('deleteVisitor Cvisitor.js >', result);
        res.send('삭제 성공!');
    })
}