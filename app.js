Ext.Loader.setConfig({
	enabled : true
});

Ext.application({

	name: 'Touch2Demo',

	controllers: [
		'Main'
	],

	views: [
		'ContatosList',
		'ContatosForm'
	],

	models: [
		'Contato'
	],

	
	stores: [
		'Contatos'
	],

	viewport:{
		layout:{
			type: 'card',
			animation: {
				type: 'slide',
				duration: 1000	
			}
		}
	},

	launch: function(){	
	}
});