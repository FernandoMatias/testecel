Ext.define('Touch2Demo.view.ContatosList',{
	extend: 'Ext.dataview.List',
	alias: 'widget.contatosList',
	config: {
		store: 'Contatos',
		itemTpl: '{nome}   {sobrenome}',
		onItemDisclosure: true,
		items: [
			{
				docked: 'top',
				xtype : 'toolbar',
				ui    : 'light',
				title : 'Lista de Contatos',
				items : [
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						action: 'novoContato',
						text: 'Novo Contatos'
					}
				]
			}
		]
	}
});