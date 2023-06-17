<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>CrudCrud - Instant CRUD REST API Endpoints</title>
	<meta name="description"
		content="Unique HTTPS endpoint automatically generated on first visit. Ready to receive GET, POST, PUT and DELETE requests to Create, Read, Update and Delete any REST resource.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/css/main.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
	<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-142480215-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-142480215-1');
	</script>
</head>

<body class="has-navbar-fixed-top">
	<nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img alt="CrudCrud Logo" src="/pics/logo-white.png">
                </a>

				<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
					data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item" href="/">
					Home
				</a>
				<a class="navbar-item" href="/Dashboard">
					Dashboard
				</a>
			</div>
		</div>
	</nav>
	<section class="hero is-dark is-medium is-bold">
		<div class="hero-body">
			<div class="container has-text-centered">
				<h1 class="subtitle is-size-7">Note: Service still in development. Instabilities are possible.</h1>
				<h1 class="title">
					Create, Read, Update and Delete whatever you want!
				</h1>
				<h2 class="subtitle">
					Build web or mobile applications performing CRUD operations with <strong>no back-end code</strong>.
				</h2>
				<div class="endpoint-url notification is-light is-family-code is-size-7-mobile">
					https://crudcrud.com/api/f6212d6ab9064235a32dfd697eee99f7
				</div>
				<div>
					Your REST endpoint is up and ready to receive GET, POST, PUT and DELETE requests.
				</div>
				<br>
				<a class="button is-primary" href="/Dashboard/f6212d6ab9064235a32dfd697eee99f7">Check Endpoint
					Information</a>
			</div>
		</div>
	</section>

	<section id="requests-table" class="section has-text-centered">
		<h1 class="title">
			Here is what you can do
		</h1>
		<div class="columns is-centered">
			<div class="column is-narrow">
				<table class="table">
					<thead>
						<tr>
							<th>Action</th>
							<th>HTTP</th>
							<th class="is-hidden-mobile">Payload</th>
							<th>URL</th>
							<th class="is-hidden-mobile">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Create</td>
							<td>POST</td>
							<td class="is-hidden-mobile">json</td>
							<td class="is-family-code">/&lt;resource&gt;</td>
							<td class="is-hidden-mobile">Create an entity represented by the JSON payload.</td>
						</tr>
						<tr>
							<td>Read</td>
							<td>GET</td>
							<td class="is-hidden-mobile">-</td>
							<td class="is-family-code">/&lt;resource&gt;</td>
							<td class="is-hidden-mobile">Get all entities from the resource.</td>
						</tr>
						<tr>
							<td>Read</td>
							<td>GET</td>
							<td class="is-hidden-mobile">-</td>
							<td class="is-family-code">/&lt;resource&gt;/&lt;id&gt;</td>
							<td class="is-hidden-mobile">Get a single entity.</td>
						</tr>
						<tr>
							<td>Update</td>
							<td>PUT</td>
							<td class="is-hidden-mobile">json</td>
							<td class="is-family-code">/&lt;resource&gt;/&lt;id&gt;</td>
							<td class="is-hidden-mobile">Update an entitiy with the JSON payload.</td>
						</tr>
						<tr>
							<td>Delete</td>
							<td>DELETE</td>
							<td class="is-hidden-mobile">-</td>
							<td class="is-family-code">/&lt;resource&gt;/&lt;id&gt;</td>
							<td class="is-hidden-mobile">Delete an entity.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<h2 class="subtitle is-size-6">
			Prefix all URLs with your unique REST endpoint <br>
			<span class="is-family-code">&lt;resource&gt;</span> can be any REST resource name <br>
			<span class="is-family-code">&lt;id&gt;</span> gets automatically generated for every entity you create
		</h2>
	</section>

	<section id="example" class="section">
		<div class="container">
			<div class="columns">
				<div class="column has-text-centered">
					<p class="has-text-justified">
						A unique API endpoint has been created for you at the address below.
						You can append any REST resource to it and
						issue a request. CrudCrud will automatically
						create the resource.
					</p>
					<br>
					<div class="endpoint-url notification is-dark is-family-code is-size-7">
						https://crudcrud.com/api/f6212d6ab9064235a32dfd697eee99f7
					</div>
					<p class="has-text-justified">
						For example, let's say you are building a "Unicorn Farm" application and it needs to
						Create, Read, Update and Delete (CRUD) unicorn records like this one:
					</p>
					<br>
					<p class="is-family-code is-size-7">
						{ "name":"Sparkle Angel", "age":2, "colour":"blue" }
					</p>
					<br>
					<p class="has-text-justified">
						To create a unicorn, your application needs to issue a POST request with the unicorn
						JSON payload to a REST API. The name <span class="is-family-code">unicorns</span>
						sounds like a good name for the REST resource, so append it to your endpoint to get:
					</p>
					<br>
					<p class="endpoint-url is-family-code is-size-7">
						https://crudcrud.com/api/f6212d6ab9064235a32dfd697eee99f7/unicorns
					</p>
					<br>
					<div>
						<button
                        class="button is-success"
                        id="create-unicorn-button"
                        onclick="createUnicorn(endpointUrl, unicornJson)">
                            Click to create a unicorn
                    </button>
					</div>
					<br>
					<p class="has-text-justified">
						Every time you click the button a POST request will be sent to your endpoint
						to create a new unicorn. To get all unicorns created so far, you can issue a GET
						request using your browser by going to
						<a href='https://crudcrud.com/api/f6212d6ab9064235a32dfd697eee99f7/unicorns' target="_blank"
							rel="noopener noreferrer">
							the address of the REST endpoint
						</a>.
					</p>
					<br>
					<p class="has-text-justified">
						Note that every unicorn record gets a unique <span class="is-family-code">_id</span> property
						generated by CrudCrud to make sure there is always a way to refer to individual objects.
						Use this identifier when you want to read (GET), update (PUT) or delete (DELETE)
						individual entities from your resources. See the <a href="#requests-table">Summary Table</a> for
						details.
					</p>
				</div>
				<div class="column">
					<nav class="level is-block">
						<div class="level-item">
							<figure class="image">
								<img src="/pics/diagram-no-background.png" alt="Diagram explaining what CrudCrud is about">
                        </figure>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</section>

	<section id="perfect-for" class="section has-text-centered">
		<h1 class="title">
			CrudCrud is perfect for:
		</h1>
		<br>
		<div class="columns is-centered">
			<div class="column is-6">
				<nav class="level">
					<div class="level-left">
						<div class="level-item">
							<span class="icon is-large">
                            <i class="fas fa-3x fa-check"></i>
                        </span>
						</div>
					</div>
					<div class="level-item">
						<h2 class="title is-size-5">
							Fast Prototyping
						</h2>
					</div>
				</nav>
				<nav class="level">
					<div class="level-left">
						<div class="level-item">
							<span class="icon is-large">
                            <i class="fas fa-3x fa-check"></i>
                        </span>
						</div>
					</div>
					<div class="level-item">
						<h2 class="title is-size-5">
							Proof-of-Concept Applications
						</h2>
					</div>
				</nav>
				<nav class="level">
					<div class="level-left">
						<div class="level-item">
							<span class="icon is-large">
                            <i class="fas fa-3x fa-check"></i>
                        </span>
						</div>
					</div>
					<div class="level-item">
						<h2 class="title is-size-5">
							Minimum Viable Products
						</h2>
					</div>
				</nav>
				<nav class="level">
					<div class="level-left">
						<div class="level-item">
							<span class="icon is-large">
                            <i class="fas fa-3x fa-check"></i>
                        </span>
						</div>
					</div>
					<div class="level-item">
						<h2 class="title is-size-5">
							Tutorials
						</h2>
					</div>
				</nav>
				<nav class="level">
					<div class="level-left">
						<div class="level-item">
							<span class="icon is-large">
                            <i class="fas fa-3x fa-check"></i>
                        </span>
						</div>
					</div>
					<div class="level-item">
						<h2 class="title is-size-5">
							Personal Projects
						</h2>
					</div>
				</nav>
				<nav class="level">
					<div class="level-left">
						<div class="level-item">
							<span class="icon is-large">
                            <i class="fas fa-3x fa-check"></i>
                        </span>
						</div>
					</div>
					<div class="level-item">
						<h2 class="title is-size-5">
							Application Testing
						</h2>
					</div>
				</nav>
				<nav class="level">
					<div class="level-left">
						<div class="level-item">
							<span class="icon is-large">
                            <i class="fas fa-3x fa-check"></i>
                        </span>
						</div>
					</div>
					<div class="level-item">
						<h2 class="title is-size-5">
							Small Production Applications
						</h2>
					</div>
				</nav>
			</div>
		</div>
	</section>

	<section id="pricing" class="section has-text-centered">
		<h1 class="title">
			It's simple
		</h1>
		<h2 class="subtitle">
			You take care of the <strong>client</strong>. <br>
        CrudCrud will take care of the <strong>REST</strong>.
		</h2>
		<div class="columns is-centered">
			<div class="column is-8">
				<div class="notification endpoint-url is-dark is-family-code is-size-7-mobile">
					https://crudcrud.com/api/f6212d6ab9064235a32dfd697eee99f7
				</div>
			</div>
		</div>
		<h2 class="subtitle">
			Your REST endpoint is up and running, waiting for your requests. <br>
        Give it a try for <strong>free</strong>.
		</h2>
		<br>
		<a class="button is-primary" href="/Dashboard/f6212d6ab9064235a32dfd697eee99f7">Check Endpoint Information</a>
	</section>

	<script>
		var endpointUrl = "https://crudcrud.com/api/f6212d6ab9064235a32dfd697eee99f7/unicorns";
    var unicornJson = '{ "name":"Sparkle Angel", "age":2, "colour":"blue" }';
	</script>

	<footer class="footer">
		<div class="content has-text-centered">
			<p>
				<img alt="CrudCrud Logo" src="/pics/logo-black.png">
                </p>
				<p>
					<strong>CrudCrud &copy; 2023</strong>
				</p>
				<a href="/TermsOfService">
					Terms of Service
				</a>
				-
				<a href="/PrivacyPolicy">
					Privacy Policy
				</a>
		</div>
	</footer>

	<script src="/js/main.js?v=vxZQxGzSFPUAomGDX9zYdyr2n2CY6aiQ_NxRUlzW7Fs"></script>
</body>

</html>