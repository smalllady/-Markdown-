var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	port:8889,
	user:'root',
	password:'root',
	database:'editor'
})
con.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  var sql = 'select * from editor';
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results);
			 
		}
	})
});

router.post('/',function(req,res,next){
	var title = req.body.title;
	var content = req.body.content;
	var markdown = req.body.markdown;
	var sql = `INSERT INTO editor (title, content,markdown) VALUES ('${title}','${content}','${markdown}')`;
	var sql2 = 'select * from editor';
	// console.log(sql)
	con.query(sql,function(err, results,f) {
		if(results.affectedRows===1){
			con.query(sql2,function(err, results2,f){
				if(err){
					console.log(err);
				}else{
					res.json(results2);
					 
				}
			})
		}
		
	});

})

router.post('/delete',function(req,res,next){
	var id = req.body.id;
	console.log(id)
	var sql = `DELETE FROM editor WHERE id=${id}`;
	var sql2 = 'select * from editor'
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err)
		}else{
			// res.json({state:"ok",message:"删除成功"})
			if(results.affectedRows===1){
				con.query(sql2,function(err, results2,f){
					if(err){
						console.log(err);
					}else{
						res.json(results2);
						 
					}
				})
			}

		}
	})
})

router.post('/edit',function(req,res,next){
	var id = req.body.id;
	var title = req.body.title;
	var content = req.body.content;
	var markdown = req.body.markdown;
	console.log(id)
	var sql = `UPDATE editor SET title='${title}',content='${content}',markdown='${markdown}' where id=${id}` ;
	var sql2 = 'select * from editor';
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			con.query(sql2,function(err, results2,f){
				if(err){
					console.log(err);
				}else{
					console.log(results2);
					res.json(results2);
					 
				}
			})
			 
		}
	})
})

router.post('/register',function(req,res,next){
	var username = req.body.username;
	var psw = req.body.password;
	var sql1 = `INSERT INTO user (username, password) VALUES ('${username}','${psw}')`;
	var sql2=`select * from user where username = '${username}'`;
	con.query(sql2,function(err,results,f){
		if(err){
			console.log(err)
		}else{
			console.log(results)
			if(results.length===1){
			 	res.send({state:'noOk',message:'用户已存在'})
			}else{
				con.query(sql1,function(err,results,f){
					if(err){
						res.send({state:'noOk',message:'注册失败'})
					}else{
						if(results.affectedRows===1){
							res.send({state:'Ok',message:'注册成功'})
						}
					}
				})
			}
			
		}

	})
	
})

module.exports = router;
