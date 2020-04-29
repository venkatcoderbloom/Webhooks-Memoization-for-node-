// The following code i have written for calling an API which receives userId only if it is not repeated for a particular period of time

var userCollection = {};
function delayTime(userId){                 // the delayTimer function return delay Id
   a = _.delay(()=>{              // lodash.delay functionality
   delete userCollection[userId];            // deleting the userId from the memoization object in my case [optional]
   callSync(userId);
   
  },3000)
return a;
}

function callSync(userId){
  console.log("called sync",userId);    // call the sync API
}

function receivedId (userId){

if(userId in userCollection){             //checking if the userId is in collection
     console.log('id cleared',userCollection[userId].delayId);
     clearTimeout(userCollection[userId].delayId);   // cancel the delay function if it is called again within given time
        userCollection[userId] = {delayId :delayTime(userId)};
     
  }

else{
  userCollection[userId] = {};    // store the userId as key and delay Id  ---> Memoization
  userCollection[userId] = {delayId :delayTime(userId)};   
  console.log('finished execution');
 
}
}
