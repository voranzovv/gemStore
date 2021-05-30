import React from 'react';

function Toolbar(props) {
    return (
        <header className="item header margin-top-0">
<div className="wrapper">
	<nav role="navigation" className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top">
	<div className="container">
		<div className="navbar-header">
			<button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
			<i className="fa fa-bars"></i>
			<span className="sr-only">Toggle navigation</span>
			</button>
			<a href="index.html" className="navbar-brand brand"> SCORILO </a>
		</div>
		<div id="navbar-collapse-02" class="collapse navbar-collapse">
			<ul class="nav navbar-nav navbar-right">
				<li className="propClone"><a href="index.html">Home</a></li>
				<li className="propClone"><a href="shop.html">Gem</a></li>
				<li className="propClone"><a href="product.html">Product</a></li>
				<li className="propClone"><a href="checkout.html">Checkout</a></li>
				<li className="propClone"><a href="contact.html">Contact</a></li>
			</ul>
		</div>
	</div>
	</nav>
</div>
</header>
    );
}

export default Toolbar;