function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   if (listA === null || listB === null){
	   	return null;
	   }

	   for (var i=0; i<listA.length; i++){
	   	var nextValue = listA[i]; // get next value in the list

		//for every element in list B
		for(var j=0; j<listB.length; j++){
			if(listB[j] === nextValue){
				resultList.push(listB[j]);
				break;
			}
		}


	   }
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}


    // Set A - Set B
    this.relativeCompliment = function(listA, listB) {
        var resultList = new Array();
        var index;
        var midSet = new Array();
        midSet = this.intersection(listA,listB);

        /*-------------------------------Insert your code here -------------------------------------*/
        //LIST A - LIST B
        if (listA === null || listB === null){
            return null;
        }

        // copy list A into resultList
        for (var i=0; i<listA.length; i++) {
            resultList.push(listA[i]);
        }
        index = resultList.length - 1;
        for (index; index >= 0; --index) {
            if (midSet.indexOf(resultList[index]) >= 0) {
                resultList.splice(index, 1);
            }
        }

        return resultList;
    }
    /*-------------------------------Insert your code here -------------------------------------*/




    this.union = function(listA, listB) {

	   var resultList = new Array();
	   var dSetAtoB = this.relativeCompliment(listA,listB);
	   var dSetBtoA = this.relativeCompliment(listB,listA);
	   var midSet = this.intersection(listA,listB);

	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null){
            return null;
        }

	   resultList = resultList.concat(dSetAtoB);
	   resultList = resultList.concat(midSet);
	   resultList = resultList.concat(dSetBtoA);

	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}

    //union function
    this.union = function(listA, listB) {

        var resultList = new Array();
        var dSetAtoB = this.relativeCompliment(listA,listB);
        var dSetBtoA = this.relativeCompliment(listB,listA);
        var midSet = this.intersection(listA,listB);

        /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null){
            return null;
        }
        // copy list A into resultList
        for (var i=0; i<listA.length; i++) {
            resultList.push(listA[i]);
        }
        resultList = resultList.concat(dSetAtoB);
        resultList = resultList.concat(midSet);
        resultList = resultList.concat(dSetBtoA);

        /*-------------------------------Insert your code here -------------------------------------*/

        return resultList;
    }




	this.symetricDifference = function(listA, listB) {

        var resultList = new Array();
        var dSetAtoB = this.relativeCompliment(listA,listB);
        var dSetBtoA = this.relativeCompliment(listB,listA);

		/*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null){
            return null;
        }

        resultList = resultList.concat(dSetAtoB);
        resultList = resultList.concat(dSetBtoA);

		/*-------------------------------Insert your code here -------------------------------------*/

        return resultList;
	}	
	

}
