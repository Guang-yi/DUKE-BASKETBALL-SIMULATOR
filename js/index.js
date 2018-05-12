// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// Number from 0.0 to 1.0
//  var playerData = {
//   'Grayson Allen':{
//     'name': 'Grayson Allen',
//     'per': 10,
//     'position': 'SG',
//     '3PP': 50,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   }, 'Luke Kennard':{
//     'name': 'Luke Kennard',
//     'per': 1,
//     'position': 'SG',
//     '3PP': 50,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   },
//   'Marques Bolden':{
//     'name': 'Marques Bolden',
//     'per': 1,
//     'position': 'C',
//     '3PP': 10,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   },
//      'Javin DeLaurier':{
//     'name': 'Marques Bolden',
//     'per': 1,
//     'position': 'C',
//     '3PP': 10,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   }  ,
//      'Jayson Tatum':{
//     'name': 'Marques Bolden',
//     'per': 1,
//     'position': 'C',
//     '3PP': 10,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   }  ,
//      'Jack White':{
//     'name': 'Marques Bolden',
//     'per': 1,
//     'position': 'C',
//     '3PP': 10,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   }  ,
//      'Amile Jefferson':{
//     'name': 'Marques Bolden',
//     'per': 1,
//     'position': 'C',
//     '3PP': 10,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   }  ,
//      'Matt Jones':{
//     'name': 'Marques Bolden',
//     'per': 1,
//     'position': 'C',
//     '3PP': 10,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   }  ,
//      'Harry Giles':{
//     'name': 'Marques Bolden',
//     'per': 1,
//     'position': 'C',
//     '3PP': 10,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   }  ,
//      'Frank Jackson':{
//     'name': 'Marques Bolden',
//     'per': 1,
//     'position': 'C',
//     '3PP': 10,
//     'blocks': 2,
//     'steals': 2,
//     'fg': 50
//   }
// };

var playerData = {
  'Grayson Allen': {
    'name': 'Grayson Allen',
    'per': 16.199837571088676,
    'position': 'SG',
    '3PP': 33.51,
    'blocks': 0.06,
    'steals': 0.76,
    'fg': 38.24,
    'pic': "http://images.performgroup.com/di/library/sporting_news/33/bd/grayson-allenjpg_yxuxinnuv6541oiv6gkpolrr0.jpg?t=-1705841121&w=960&quality=70"

  },
  'Marques Bolden': {
    'name': 'Marques Bolden',
    'per': 0.1,
    'position': 'C',
    '3PP': 0.00,
    'blocks': 0.29,
    'steals': 0.08,
    'fg': 19.23,
    'pic': 'http://img.bleacherreport.net/img/images/photos/003/637/995/hi-res-088b5b2513fe54ae3c9cd8d78ef30004_crop_north.jpg?1478555011&w=630&h=420'
  },
  'Javin DeLaurier': {
    'name': 'Javin DeLaurier',
    'per': 0.1,
    'position': 'PF',
    '3PP': 0.00,
    'blocks': 0.33,
    'steals': 0.33,
    'fg': 52.78,
    'pic': 'http://cdn4.sportngin.com/attachments/photo/4775/3579/Javin_Montgomery-Delaurier_NBA_Top_100_medium.jpg'
  },
  'Harry Giles': {
    'name': 'Harry Giles',
    'per': 5.585555629309125,
    'position': 'PF',
    '3PP': 0.00,
    'blocks': 0.65,
    'steals': 0.35,
    'fg': 51.75,
    'pic': 'http://www.newsobserver.com/sports/college/acc/duke/duke-now/piwpok/picture121912558/alternates/FREE_640/DUKETENN9SP121916CEL'
  },
  'Frank Jackson': {
    'name': 'Frank Jackson',
    'per': 19.016979377271408,
    'position': 'PG',
    '3PP': 40.40,
    'blocks': 0.06,
    'steals': 0.56,
    'fg': 45.39,
    'pic': 'http://cdn.fansided.com/wp-content/blogs.dir/175/files/2016/11/9672531-frank-jackson-ncaa-basketball-grand-canyon-duke-850x560.jpg'
  },
  'Amile Jefferson': {
    'name': 'Amile Jefferson',
    'per': 25.512815449174305,
    'position': 'PF',
    '3PP': 0.00,
    'blocks': 1.85,
    'steals': 0.69,
    'fg': 60.76,
    'pic': 'http://content.sny.tv/assets/images/0/7/6/173825076/cuts/PQFEIDPPPTAIPGZ.20151209214056_h5h4fnq7_mou7xm5z.jpg'
  },
  'Matt Jones': {
    'name': 'Matt Jones',
    'per': 25.902077735451837,
    'position': 'SG',
    '3PP': 33.19,
    'blocks': 0.16,
    'steals': 1.70,
    'fg': 38.05,
    'pic': 'http://dukereport.com/wp-content/uploads/2014/10/Matt_Jones_Duke.jpg'
  },
  'Luke Kennard': {
    'name': 'Luke Kennard',
    'per': 30.566331849390878,
    'position': 'SG',
    '3PP': 45.42,
    'blocks': 0.35,
    'steals': 0.84,
    'fg': 49.39,
    'pic': 'http://image.cdnllnwnl.xosnetwork.com/pics33/800/HG/HGKWMZYULKJJEMB.20151129201506.jpg'
  },
  'Justin Robinson': {
    'name': 'Justin Robinson',
    'per': 0.1,
    'position': 'SF',
    '3PP': 0.00,
    'blocks': 0.00,
    'steals': 0.00,
    'fg': 0.00,
    'pic': 'http://image.cdnllnwnl.xosnetwork.com/pics33/400/IK/IKKEIIRINNPYKSE.20151105190300.jpg'
  },
  'Jayson Tatum': {
    'name': 'Jayson Tatum',
    'per': 25.344380259675262,
    'position': 'SF',
    '3PP': 31.67,
    'blocks': 0.46,
    'steals': 0.55,
    'fg': 45.41,
    'pic': 'https://s3media.247sports.com/Uploads/Assets/261/154/6_5154261.jpg'
  }
};

$(document).ready(function() {

  //   Initialize Fields
  var leftPlayer = playerData[$('#p-left').val()];
  var rightPlayer = playerData[$('#p-right').val()];
  // console.log(rightPlayer);
  $('#r-pos').text(rightPlayer['position']);
  $('#r-fg').text(rightPlayer['fg']);
  $('#r-3p').text(rightPlayer['3PP']);
  $('#r-b').text(rightPlayer['blocks']);
  $('#r-s').text(rightPlayer['steals']);

  $('#l-pos').text(rightPlayer['position']);
  $('#l-fg').text(rightPlayer['fg']);
  $('#l-3p').text(rightPlayer['3PP']);
  $('#l-b').text(rightPlayer['blocks']);
  $('#l-s').text(rightPlayer['steals']);

  var wp = leftPlayer.per / (rightPlayer.per + leftPlayer.per);
  var tweet = '@DukeMBB '+leftPlayer.name + ' has a ' + String(Number((wp * 100).toFixed(1))) + ' percent chance of beating ' + rightPlayer.name +"&hashtags=DUKEMBB";
  tweet =  'https://twitter.com/intent/tweet?text=' + tweet;
  tweet.replace(/ /g, "+");
  console.log(tweet);
  $("#tweet-quote").attr('href', tweet);

  //   Comparison Button
  $("#compare-button").on("click", function() {
    var lp = playerData[$('#p-left').val()];
    var rp = playerData[$('#p-right').val()];
    // console.log(rightPlayer);
    $('#r-pos').text(rp['position']);
    $('#r-fg').text(rp['fg']);
    $('#r-3p').text(rp['3PP']);
    $('#r-b').text(rp['blocks']);
    $('#r-s').text(rp['steals']);

    $('#l-pos').text(lp['position']);
    $('#l-fg').text(lp['fg']);
    $('#l-3p').text(lp['3PP']);
    $('#l-b').text(lp['blocks']);
    $('#l-s').text(lp['steals']);

    var wp = lp.per / (rp.per + lp.per);
    var twt = '@DukeMBB '+ lp.name + ' has a ' + String(Number((wp * 100).toFixed(1))) + ' percent chance of beating ' + rp.name;

    //images
    $('#l-pic').attr('src', lp.pic);
    $('#r-pic').attr('src', rp.pic);
    twt = 'https://twitter.com/intent/tweet?text=' + twt + "&hashtags=DUKEMBB"
    twt = twt.replace(/ /g, "+");
    $("#tweet-quote").attr('href', twt);

    $('#container').empty();
    var bar = new ProgressBar.Circle(container, {
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 3000,
      easing: 'bounce',
      text: {
        value: '',
        alignToBottom: false
      },
      strokeWidth: 6,
      from: {
        color: '#FFEA82',
        a: 0
      },
      to: {
        color: '#FF3E3E',
        a: 1
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(lp['name'] + ' ' + value + "% Chance of Winning");
        }

        circle.text.style.color = state.color;
      }
    });

    bar.text.style.fontSize = '24px';

    var winPercent = lp.per / (lp.per + rp.per);
    bar.animate(winPercent);
  });

});