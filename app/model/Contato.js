Ext.define('Touch2Demo.model.Contato',{
	extend: 'Ext.data.Model',
	config: {

		fields: [
			{name: 'id', type: 'int'},
			{name: 'nome', type: 'string'},
			{name: 'email', type: 'string'}
		]
	}

});