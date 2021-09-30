var currentDay = $('#currentDay');
var saveBtn = $('.saveBtn');
//format the current date
var today = moment().format('dddd, MMMM Do YYYY');
currentDay.text('Today is '+ today);

var timeBlockEl;
var timeBlock;

var currentTime = moment().format("H");

//Using a for loop to set the status of each time block
for(var i=9; i<=17;i++){
    var timeBlock='#hour-' + i;
    var timeBlockEl = $(timeBlock);
    if(currentTime>i){
        timeBlockEl.addClass('past');
    }else if(currentTime==i){
        timeBlockEl.addClass('present');
    }else{
        timeBlockEl.addClass('future');
    }
}

//using a for loop to retrieve data from local storage to each time block
for(var i=9;i<=17;i++){
    var id ='#hour-' + i;
    var storeId = 'hour-' + i; 
    var task = localStorage.getItem(storeId);
    if(task){
        $(id).children().eq(1).val(task);
    }
}


//apply an event listener to store the data
saveBtn.on('click',function(){
    var input = $(this).parent().children('textarea').val();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id,input);
});


