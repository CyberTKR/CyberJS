const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
╔══╗\n\
║██║\n\
║(O)║♫ ♪ ♫ ♪\n\
╚══╝\n\
▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █\n\
Min- - - - - - - - - - - -●Max\n\
  ____      _                  _____ _  __\n\
 / ___|   _| |__   ___ _ __   |_   _| |/ /\n\
| |  | | | | '_ \ / _ \ '__|____| | | ' /\n\
| |__| |_| | |_) |  __/ | |_____| | | . \\n\
 \____\__, |_.__/ \___|_|       |_| |_|\_\\n\
      |___/\n\
    Continue To Follow Cyber-TK\n\
\n");
console.info("\n\
=========================================\n\
BotName: LINE Cyber: JS\n\
Version: FORKED VERSION\n\
Thanks to @CyberTK @TKR_TEAM\n\
=========================================\n\
");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
*/
const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
