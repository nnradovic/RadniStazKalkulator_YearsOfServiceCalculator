jQuery(document).ready(function($) {

$('#btn').on('click',function(){
var yearstart = $('#years').val()
var monthstart = $('#months').val()
var daystart = $('#days').val()
console.log(typeof daystart);
var yearend = $('#yeare').val()
var monthend = $('#monthe').val()
var dayend = $('#daye').val()
var result = $('#result');
var result1 =$('#result1');
var yeara = $('#yeara').val()
var montha = $('#montha').val()
var daya = $('#daya').val()


function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1; 
    months += d2.getMonth();
   
   
		    if(months <= 0){
		    	return 0;
		    
		    }else if(daystart == 1 ){
		        return months+1;
		    }else if(daystart == dayend){
		    	 return months+1;
		    }else{
		    	return months
		    }
 }

			var month = monthDiff(
			   
			    new Date(yearstart, monthstart, daystart),
			    new Date(yearend, monthend, dayend)
			);

var monthcount = month %12;
var year = (month-monthcount)/12;
var day;
    function stage(){
		if(parseInt(dayend)<parseInt(daystart)){
			console.log(1111111111111111);
			// var monthLong = [1,3,5,7,8,10,12];
			// var monthShort = [4,6,9,11];
			// var februar = [2];

		            if(monthstart == 1 || monthstart == 3 || monthstart == 5 || monthstart == 7 || monthstart == 8 || monthstart == 10 || monthstart == 12){

					      day = Number(dayend) + (31-Number(daystart))
		                  console.log(31);

				    }else if(monthstart == 4 || monthstart == 6 || monthstart == 9 || monthstart == 11){

				    	 day = Number(dayend) + (30-Number(daystart))
		                   console.log(30);

				    }else if(monthstart == 2) {

						    	if((yearstart % 100 === 0) ? (yearstart % 400 === 0) : (yearstart % 4 === 0)){
						    		  day = Number(dayend) + (29-Number(daystart));
						    		 console.log(29);

						    	}else{
						              day = Number(dayend) + (28-Number(daystart));
						             console.log(28);

						        } 
		        
		            }
		}else if(parseInt(dayend)>parseInt(daystart) || parseInt(dayend)==parseInt(daystart)){
			
			 day = Number(dayend)-Number(daystart);
			 month += 1;
			 monthcount =  month %12;
             year = (month-monthcount)/12;
		}
    }

		
    

    stage(day)
        result.html('')
		result.append('Radni staz iznosi:  <strong>'+  year  +'</strong> godina,   <strong> '+  monthcount  + '  </strong> mesec, <strong>' +  day  + '</strong> dana u sadasnoj firmi')
           
       var dayAll = Number(day) + Number(daya)
       var monthAll = Number(monthcount) + Number(montha);
       var yearAll = Number(year) + Number(yeara);

       if(dayAll>30){
       	 monthAll+=1;
       	 dayAll -=30
       }       
       if(monthAll>12){
       	  yearAll +=1
          monthAll -= 12
       }                 
        result1.html('');
        result1.append('Ukupan radni staz u obe firme je: <strong>'+  yearAll  +'</strong> godina,   <strong> '+  monthAll  + '  </strong> mesec, <strong>' +  dayAll  + '</strong> dana ')
        
})


});

// console.log(x);
// y = x % 12;
// z=(x-y)/12
// d =11-3
// console.log('Godina: '+z);
// console.log('Meseci: '+y); 
// console.log('dana: ' +d);




// if(dayend<daystart){
// 	var monthLong = [1,3,5,7,8,10,12];
// 	var monthShort = [4,6,9,11];
// 	var februar = [2]
//     var fullMonthDay = if($.inArray(monthstart, monthLong)){
// 	return day = dayend + (31-daystart)
//     }else if($.inArray(monthstart, monthShort)){
//     	return day = dayend + (30-daystart)
//     }else if($.inArray(monthstart, februar) ){
//     	if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
//     		 return day = dayend + (29-daystart);
//     	}else{
//              return day = dayend + (28-daystart);
//     	} 
        
//     }
// }else{
// 	return day = dayend-daystart;
// }