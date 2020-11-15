const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/', (request, response) => {
	response.end(`
		<div>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About New</a>
					</li>
				</ul>
			</nav>
			<h1>Home page</h1>
		</div>
	`)
})

app.get('/about', (request, response) => {
	response.end(`
		<div>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About New</a>
					</li>
				</ul>
			</nav>
			<h1>About page</h1>
		</div>
	`)
})

app.listen(port, (x) => console.log('server has been started', x))