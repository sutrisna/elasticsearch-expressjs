var express = require('express');
var elastic = require('elasticsearch');
var router = express.Router();

var client = new elastic.Client({
  host: 'localhost:9200',
  log: 'trace'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create',function(req, res){
  client.create({
    index: 'first_index',
    type: 'first_type',
    id: '1',
    body: {
      nama: req.body.nama,
      learn: req.body.learn,
      tags: req.body.tags,
      published: req.body.published,
      published_at: '2016-11-11',
      counter: 1
    }
  }, function (error, response) {
    res.send(response);
  });
});

router.get('/read',function(req, res){

  client.get({
    index: req.get('index'),
    type: req.get('type'),
    id: 1
  }, function (error, response) {
    res.send(response);
    // res.render('index',{
    //   'test': response
    // })
  });
});

router.post('/update',function(req, res){
  client.update({
    index: 'first_index',
    type: 'first_type',
    id: '1',
    body: {
        doc:{
          nama:req.body.nama
        }
    }
  }, function (error, response) {
    res.send(response);
  });
});



router.get('/delete',function(req, res){
  client.delete({
  index: 'first_index',
  type: 'first_type',
  id: '1'
}, function (error, response) {
  res.send(response);
});
});

module.exports = router;
