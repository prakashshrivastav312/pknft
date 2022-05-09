App={
  loading:false,
  contracts:{},
  load: async()=>{
    await App.loadWeb3()

    window.alert('Load1')
    await App.loadAccount()
    window.alert('Load2')

    await App.loadContract()
    await App.render()


  },
  loadWeb3: async()=>{
    if(typeof web3!=="undefined"){
        App.web3Provider= web3.currentProvider
        web3=new Web3(web3.currentProvider)
    }
    else{
      window.alert("Please Connect To Metamask")
    }



    if(window.ethereum){
      window.web3=new Web3(ethereum)
      try{
        App.acc=await ethereum.enable()
        web3.eht.sendTransaction({/* ... */})
      }
      catch (error){

      }
    }
    else if(window.web3){
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)
      // Acccounts always exposed
      web3.eth.sendTransaction({/* ... */})
    }
    else{
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  },
  loadAccount: async () => {
    // Set the current blockchain account
    App.account = App.acc[0];  
    //window.alert(App.account);
   
  },
  loadContract: async()=>{
    const Sample=await $.getJSON('Shapes.json');
    App.contracts.Sample=TruffleContract(Sample);
    App.contracts.Sample.setProvider(App.web3Provider);


    App.student=await App.contracts.Sample.deployed(); 


  },
  render:async()=>{

    $('#meta').html(App.account);
    $('#showpage').show();
    $('#showpage3').show();
    console.log(App.student.address);
 
  },
  mint :async()=>{
    var amountinwei=0.1*1000000000000000000;
    await App.student.purchase({from:App.account, value:amountinwei});
  }

}

// $(function() {
//   $(window).load(function() {
//     App.init();
//   });
// });