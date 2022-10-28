import './App.scss';

const title = 'Our JSX Basics Lesson';
const userIsOnline = false;

const a = 9;
const b = 2;

if (a === 1 && b === 2) {
	console.log('ok');
}

function App() {
	return (
		<div className="App">
			<h1>{title}</h1>

      {/* strange if statement (hack) */}
			{userIsOnline && <div>user is online</div>}
			<hr />
   
      {/* strange if-else statement (hack) */}
			{userIsOnline ? (
				<div>user doesn't need to login</div>
			) : (
				<div>user needs to login</div>
			)}
		</div>
	);
}

export default App;
