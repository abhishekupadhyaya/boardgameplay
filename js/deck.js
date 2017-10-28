//deck
function deck(){

    this.cardList = new array();
    this.discardList = new array();
    this.otherRegions = null;
    this.numCards = 0;
    this.numDisCards =0;

    this.add = function(inCardList){
        if (inCardList instanceof card){
            this.cardList.append(inCardList);
            this.numCards = this.numCards+1;
        }
        else if(inCardList instanceof Array){
            inCardList.forEach(function(element) {
                if (element instanceof card){
                    this.cardList.append(element);
                    this.numCards = this.numCards + 1;    
                }
            });
        }   
    }

    this.shuffle() = function(){
        for (var i = 1; i <= this.numDisCards; i++) {
            var index = Math.floor((Math.random() * this.numCards) );
            var card = this.cardList[index];
            this.cardList.splice(index, 1);
            this.numCards = this.numCards -1;
            this.discardList.append(card);
        }
    }

    this.deal = function(number = 1){
        if (number ==1){
            var index = Math.floor((Math.random() * this.numCards) );
            var card = this.cardList[index];
            this.cardList.splice(index, 1);
            this.numCards = this.numCards -1;
            return card;
        }else{
            returner = new Array();
            for (var i = 1; i <= number; i++) {
                var index = Math.floor((Math.random() * this.numCards) );
                var card = this.cardList[index];
                this.cardList.splice(index, 1);
                this.numCards = this.numCards -1;
                returner.append(card);        
            }
            return returner;
        }
    }

    this.discard = function(number = 1){
        for (var i = 1; i <= number; i++) {
            var index = Math.floor((Math.random() * this.numCards) );
            var card = this.cardList[index];
            this.cardList.splice(index, 1);
            this.numCards = this.numCards -1;
            this.discardList.append(card);
        }
    }

    this.setPOwn = function(pOwn){
        this.pOwn = pOwn;
    }
    this.setGOwn = function(gOwn){
        this.gOwn = gOwn;
    }
}