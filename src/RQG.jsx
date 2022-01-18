import "./RQG.css"
import anime from 'animejs/lib/anime.es.js';
const React = require( "react" );
const ReactDOM = require( "react-dom" );
const $ = require( "jquery" );

const Jesus = document.getElementById( "Jesus" ),
	Einstein = document.getElementById( "einstein" ),
	Martin = document.getElementById( "martin" ),
	Daniel = document.getElementById( "Daniel" ),
	svgArray = [ Jesus, Daniel, Martin, Einstein ];

var result;
var svgId;
var gId;
var twitterBtn;
var twitterLink;

$( document ).ready( function() {
	$( "#new-quote" ).click( function() {
		for ( let i = svgArray.length - 1; i > 0; i-- ) {
			const j = Math.floor( Math.random() * i )
			const temp = svgArray[ i ]
			svgArray[ i ] = svgArray[ j ]
			svgArray[ j ] = temp
			result = temp
		}
		$( "svg" ).detach();
		$( "#App" ).append( result );

		switch ( result ) {
			case Jesus:
				svgId = "#Jesus";
				gId = "#gJesus";
				break;
			case Daniel:
				svgId = "#Daniel";
				gId = "#gDaniel";
				break;
			case Martin:
				svgId = "#martin";
				gId = "#gMartin";
				break;
			case Einstein:
				svgId = "#einstein";
				gId = "#gEinstein";
				break;
		}

		anime( {
			targets: svgId + " path",
			strokeDashoffset: [ anime.setDashoffset, 0 ],
			easing: 'easeInOutSine',
			duration: 1000,
			delay: function( path, i ) {
				return i * 100
			},
			direction: 'normal'
		} );
		return gId;
	} );
} );

$( document ).ready( function() {
	let result;
	$( "#tweet-quote" ).click( function() {
		let postTitle = $( `${gId}` ).attr( "aria-label" );
		let twitterLink = `https://twitter.com/intent/tweet?text=${postTitle}`
		$( document ).find( "a" ).attr( "href", `${twitterLink}` );
	} );
} );

class MyComponent extends React.Component {
	render() {
		return ( <
			div id = "quote-box"
			className = "position-absolute top-50 start-50 translate-middle border border-info rounded-3" >
			<
			div id = "text"
			className = "position-absolute start-50 top-50 translate-middle-x" >
			<
			/div> <
			div id = "author"
			className = "position-absolute start-50 top-50 translate-middle" > < /div> <
			button id = "new-quote"
			className = "btn position-absolute top-100 start-50 translate-middle" > New Quote < /button> <
			a id = "tweet-quote"
			href = ""
			className = "btn position-absolute top-0 start-50 translate-middle"
			target = "_blank" > Tweet Me! < /a> < /
			div >
		);
	}
};

export default MyComponent;
