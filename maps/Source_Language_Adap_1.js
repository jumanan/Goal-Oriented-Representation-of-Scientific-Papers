$(function(){ // on dom ready
var cy = cytoscape({
	container: document.getElementById('cy'),
	style: cytoscape.stylesheet()
		.selector('node')
			.css({
				'content': 'data(name)',
				'text-valign': 'center',
				'border-style' : 'solid',
				'text-outline-color': 'black',
				'border-color' : 'black',
				'border-width' : 1,
				'background-color': 'white',
				'line-color': '#61bffc',
				'font-size' :8,
				'text-opacity': 1,
				'padding-left' : 2.5,
				'padding-right':2.5,
				'padding-top':2.5,
				'padding-bottom':2.5
})
		.selector('node.task')
			.css({
				'shape' :'roundrectangle'
})
		.selector('node.taskset')
			.css({
				'border-opacity':'0',
				'shape':'rectangle'
})
		.selector('node.attribute')
			.css({
				'shape':'ellipse'
})
		.selector('edge')
			.css({
				'content': 'data(name)',
				'width': 1,
				'line-color': 'black',
				'source-arrow-color': 'black',
				'target-arrow-color': 'black',
				'font-size': 6,
				'curve-style':'bezier',
				'control-point-weight': 0.7,
				'text-outline-width': 1,
				'text-outline-color': '#ddd',
				'target-arrow-shape':'triangle'
})
		.selector('edge.associated_with')
			.css({
				'source-arrow-shape': 'none',
				'target-arrow-shape':'none',
				'content':''
})
		.selector('$node > node')
			.css({
				'content' : '',
				'shape': 'roundrectangle',
				'height': 'data(name)',
				'width': 'data(name)',
				'background-color': 'lightgray'
})
		.selector('.highlighted')
			.css({
				'background-color': '#61bffc',
				'line-color': '#61bffc',
				'target-arrow-color': '#61bffc',
				'transition-property': 'background-color, line-color, target-arrow-color',
				'transition-duration': '0.5s'
}),
	elements: {
		nodes: [
			{ data: { id:'t9', name: 'ML2EN - Baseline' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t32', name: 'CN:word\' Balanced Concatenation' }, css: {'width' : '128', 'height': '10'}, classes:'task'},
			{ data: { id:'t42', name: 'PPT:phrase4 Sophisticated Concatenation' }, css: {'width' : '160', 'height': '10'}, classes:'task'},
			{ data: { id:'t59', name: 'System combination Balanced Concatenation' }, css: {'width' : '168', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'source language adaptation' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'t57', name: 'DD:phrase4+morph Sophisticated Concatenation' }, css: {'width' : '180', 'height': '10'}, classes:'task'},
			{ data: { id:'t60', name: 'System combination Sophisticated Concatenation' }, css: {'width' : '188', 'height': '10'}, classes:'task'},
			{ data: { id:'t25', name: 'ML2EN  Simple Concatenation' }, css: {'width' : '112', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'CN:word\'' }, css: {'width' : '36', 'height': '10'}, classes:'task'},
			{ data: { id:'t55', name: 'DD:phrase4+morph Simple Concatenation' }, css: {'width' : '152', 'height': '10'}, classes:'task'},
			{ data: { id:'t21', name: 'concatenation' }, css: {'width' : '56', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'IN2EN - Baseline' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t13', name: 'PPT:phrase1' }, css: {'width' : '48', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'confusion networks (CN)' }, css: {'width' : '96', 'height': '10'}, classes:'task'},
			{ data: { id:'t33', name: 'CN:word\' Sophisticated Concatenation' }, css: {'width' : '148', 'height': '10'}, classes:'task'},
			{ data: { id:'t61', name: 'BG2EN - Baseline' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'MK2EN - Baseline' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t35', name: 'CN:word\'+morph Balanced Concatenation' }, css: {'width' : '152', 'height': '10'}, classes:'task'},
			{ data: { id:'t45', name: 'PPT:phrase4::CN:morph Sophisticated Concatenation' }, css: {'width' : '200', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'Baseline - unadapted' }, css: {'width' : '84', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'Text Rewriting Decoder (DD)' }, css: {'width' : '112', 'height': '10'}, classes:'task'},
			{ data: { id:'t48', name: 'DD:word\' Sophisticated Concatenation' }, css: {'width' : '148', 'height': '10'}, classes:'task'},
			{ data: { id:'t28', name: 'CN:word  Simple Concatenation' }, css: {'width' : '120', 'height': '10'}, classes:'task'},
			{ data: { id:'t24', name: 'Sophisticated Concatenation' }, css: {'width' : '112', 'height': '10'}, classes:'task'},
			{ data: { id:'t47', name: 'DD:word\' Balanced Concatenation' }, css: {'width' : '128', 'height': '10'}, classes:'task'},
			{ data: { id:'t17', name: 'DD:word\'+morph' }, css: {'width' : '60', 'height': '10'}, classes:'task'},
			{ data: { id:'t58', name: 'System combination Simple Concatenation' }, css: {'width' : '160', 'height': '10'}, classes:'task'},
			{ data: { id:'t20', name: 'System combination' }, css: {'width' : '76', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'Combination' }, css: {'width' : '48', 'height': '10'}, classes:'task'},
			{ data: { id:'t50', name: 'DD:word\'+morph Balanced Concatenation' }, css: {'width' : '152', 'height': '10'}, classes:'task'},
			{ data: { id:'t56', name: 'DD:phrase4+morph Balanced Concatenation' }, css: {'width' : '160', 'height': '10'}, classes:'task'},
			{ data: { id:'t53', name: 'DD:phrase4 Balanced Concatenation' }, css: {'width' : '136', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'pivoted phrase tables  (PPT)' }, css: {'width' : '116', 'height': '10'}, classes:'task'},
			{ data: { id:'t54', name: 'DD:phrase4 Sophisticated Concatenation' }, css: {'width' : '156', 'height': '10'}, classes:'task'},
			{ data: { id:'t26', name: 'ML2EN Balanced Concatenation' }, css: {'width' : '116', 'height': '10'}, classes:'task'},
			{ data: { id:'t31', name: 'CN:word\'  Simple Concatenation' }, css: {'width' : '124', 'height': '10'}, classes:'task'},
			{ data: { id:'t34', name: 'CN:word\'+morph Simple Concatenation' }, css: {'width' : '144', 'height': '10'}, classes:'task'},
			{ data: { id:'t12', name: 'CN:word\'+morph' }, css: {'width' : '60', 'height': '10'}, classes:'task'},
			{ data: { id:'t30', name: 'CN:word Sophisticated Concatenation' }, css: {'width' : '144', 'height': '10'}, classes:'task'},
			{ data: { id:'t29', name: 'CN:word Balanced Concatenation' }, css: {'width' : '124', 'height': '10'}, classes:'task'},
			{ data: { id:'t36', name: 'CN:word\'+morph Sophisticated Concatenation' }, css: {'width' : '172', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'statistical machine translation' }, css: {'width' : '128', 'height': '10'}, classes:'task'},
			{ data: { id:'t43', name: 'PPT:phrase4::CN:morph Simple Concatenation' }, css: {'width' : '172', 'height': '10'}, classes:'task'},
			{ data: { id:'t18', name: 'DD:phrase4' }, css: {'width' : '44', 'height': '10'}, classes:'task'},
			{ data: { id:'t38', name: 'PPT:phrase1 Balanced Concatenation' }, css: {'width' : '140', 'height': '10'}, classes:'task'},
			{ data: { id:'t44', name: 'PPT:phrase4::CN:morph Balanced Concatenation' }, css: {'width' : '180', 'height': '10'}, classes:'task'},
			{ data: { id:'t39', name: 'PPT:phrase1 Sophisticated Concatenation' }, css: {'width' : '160', 'height': '10'}, classes:'task'},
			{ data: { id:'t62', name: 'BG2EN (unadapted)' }, css: {'width' : '72', 'height': '10'}, classes:'task'},
			{ data: { id:'t23', name: 'Balanced Concatenation' }, css: {'width' : '92', 'height': '10'}, classes:'task'},
			{ data: { id:'t14', name: 'PPT:phrase4' }, css: {'width' : '48', 'height': '10'}, classes:'task'},
			{ data: { id:'t40', name: 'PPT:phrase4 Simple Concatenation' }, css: {'width' : '132', 'height': '10'}, classes:'task'},
			{ data: { id:'t16', name: 'DD:word\'' }, css: {'width' : '36', 'height': '10'}, classes:'task'},
			{ data: { id:'t22', name: 'Simple Concatenation' }, css: {'width' : '84', 'height': '10'}, classes:'task'},
			{ data: { id:'t49', name: 'DD:word\'+morph Simple Concatenation' }, css: {'width' : '144', 'height': '10'}, classes:'task'},
			{ data: { id:'t52', name: 'DD:phrase4 Simple Concatenation' }, css: {'width' : '128', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'CN:word' }, css: {'width' : '32', 'height': '10'}, classes:'task'},
			{ data: { id:'t41', name: 'PPT:phrase4 Balanced Concatenation' }, css: {'width' : '140', 'height': '10'}, classes:'task'},
			{ data: { id:'t37', name: 'PPT:phrase1 Simple Concatenation' }, css: {'width' : '132', 'height': '10'}, classes:'task'},
			{ data: { id:'t27', name: 'ML2EN Sophisticated Concatenation' }, css: {'width' : '136', 'height': '10'}, classes:'task'},
			{ data: { id:'t51', name: 'DD:word\'+morph Sophisticated Concatenation' }, css: {'width' : '172', 'height': '10'}, classes:'task'},
			{ data: { id:'t46', name: 'DD:word\' Simple Concatenation' }, css: {'width' : '120', 'height': '10'}, classes:'task'},
			{ data: { id:'t15', name: 'PPT:phrase4::CN:morph' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t19', name: 'DD:phrase4+morph' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'a0', name: 'BLEU' }, css: {'width' : '20', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'quality' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t2', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t1', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t1', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t1', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t2', target: 't0', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t2', target: 't8', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t2', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t2', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t2', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t2', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_10', weight: 1, source:'t7', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_11', weight: 1, source:'t4', target: 't10', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_12', weight: 1, source:'t4', target: 't11', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_13', weight: 1, source:'t4', target: 't12', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_14', weight: 1, source:'t5', target: 't13', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_15', weight: 1, source:'t5', target: 't14', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_16', weight: 1, source:'t5', target: 't15', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_17', weight: 1, source:'t6', target: 't16', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_18', weight: 1, source:'t6', target: 't17', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_19', weight: 1, source:'t6', target: 't18', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_20', weight: 1, source:'t21', target: 't22', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_21', weight: 1, source:'t21', target: 't23', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_22', weight: 1, source:'t21', target: 't24', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_23', weight: 1, source:'t10', target: 't28', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_24', weight: 1, source:'t10', target: 't29', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_25', weight: 1, source:'t10', target: 't30', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_26', weight: 1, source:'t11', target: 't31', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_27', weight: 1, source:'t11', target: 't32', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_28', weight: 1, source:'t11', target: 't33', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_29', weight: 1, source:'t12', target: 't34', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_30', weight: 1, source:'t12', target: 't35', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_31', weight: 1, source:'t12', target: 't36', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_32', weight: 1, source:'t13', target: 't37', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_33', weight: 1, source:'t13', target: 't38', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_34', weight: 1, source:'t13', target: 't39', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_35', weight: 1, source:'t14', target: 't40', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_36', weight: 1, source:'t14', target: 't41', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_37', weight: 1, source:'t14', target: 't42', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_38', weight: 1, source:'t15', target: 't43', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_39', weight: 1, source:'t15', target: 't44', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_40', weight: 1, source:'t15', target: 't45', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_41', weight: 1, source:'t16', target: 't46', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_42', weight: 1, source:'t16', target: 't47', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_43', weight: 1, source:'t16', target: 't48', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_44', weight: 1, source:'t17', target: 't49', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_45', weight: 1, source:'t17', target: 't50', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_46', weight: 1, source:'t17', target: 't51', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_47', weight: 1, source:'t18', target: 't52', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_48', weight: 1, source:'t18', target: 't53', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_49', weight: 1, source:'t18', target: 't54', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_50', weight: 1, source:'t19', target: 't55', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_51', weight: 1, source:'t19', target: 't56', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_52', weight: 1, source:'t19', target: 't57', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_53', weight: 1, source:'t9', target: 't25', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_54', weight: 1, source:'t9', target: 't26', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_55', weight: 1, source:'t9', target: 't27', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_56', weight: 1, source:'t20', target: 't58', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_57', weight: 1, source:'t20', target: 't59', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_58', weight: 1, source:'t20', target: 't60', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_59', weight: 1, source:'t0', target: 't20', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_60', weight: 1, source:'t2', target: 't61', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_61', weight: 1, source:'t7', target: 't62', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_62', weight: 1, source:'t6', target: 't19', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_63', weight: 1, source:'t7', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_64', weight: 1, source:'t4', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_65', weight: 1, source:'t6', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_66', weight: 1, source:'t5', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_67', weight: 1, source:'t7', target: 't20', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_68', weight: 1, source:'t12', target: 't20', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_69', weight: 1, source:'t15', target: 't20', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_70', weight: 1, source:'t19', target: 't20', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_71', weight: 1, source:'t21', target: 't1', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_72', weight: 1, source:'t1', target: 't2', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_73', weight: 1, source:'t2', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_74', weight: 1, source:'t2', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_75', weight: 1, source:'t8', target: 'a0', name: '18.67:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_76', weight: 1, source:'t60', target: 'a0', name: '22.03:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_77', weight: 1, source:'t3', target: 'a0', name: '26.46:MK2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_78', weight: 1, source:'t20', target: 'a0', name: '29.35:MK2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_79', weight: 1, source:'t1', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_80', weight: 1, source:'a0', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_81', weight: 1, source:'t25', target: 'a0', name: '18.49:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_82', weight: 1, source:'t26', target: 'a0', name: '19.79:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_83', weight: 1, source:'t27', target: 'a0', name: '20.1:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_84', weight: 1, source:'t28', target: 'a0', name: '19.99:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_85', weight: 1, source:'t29', target: 'a0', name: '20.16:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_86', weight: 1, source:'t30', target: 'a0', name: '20.32:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_87', weight: 1, source:'t31', target: 'a0', name: '20.03:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_88', weight: 1, source:'t32', target: 'a0', name: '20.8:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_89', weight: 1, source:'t33', target: 'a0', name: '20.55:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_90', weight: 1, source:'t34', target: 'a0', name: '20.6:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_91', weight: 1, source:'t35', target: 'a0', name: '21.15:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_92', weight: 1, source:'t36', target: 'a0', name: '21.05:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_93', weight: 1, source:'t37', target: 'a0', name: '20.61:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_94', weight: 1, source:'t38', target: 'a0', name: '20.71:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_95', weight: 1, source:'t39', target: 'a0', name: '20.32:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_96', weight: 1, source:'t40', target: 'a0', name: '20.75:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_97', weight: 1, source:'t41', target: 'a0', name: '21.08:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_98', weight: 1, source:'t42', target: 'a0', name: '20.76:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_99', weight: 1, source:'t43', target: 'a0', name: '21.01:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_100', weight: 1, source:'t44', target: 'a0', name: '21.31:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_101', weight: 1, source:'t45', target: 'a0', name: '20.98:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_102', weight: 1, source:'t46', target: 'a0', name: '20.67:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_103', weight: 1, source:'t47', target: 'a0', name: '20.75:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_104', weight: 1, source:'t48', target: 'a0', name: '21.16:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_105', weight: 1, source:'t49', target: 'a0', name: '20.78:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_106', weight: 1, source:'t50', target: 'a0', name: '21.25:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_107', weight: 1, source:'t51', target: 'a0', name: '21.41:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_108', weight: 1, source:'t52', target: 'a0', name: '20.91:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_109', weight: 1, source:'t53', target: 'a0', name: '21.2:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_110', weight: 1, source:'t54', target: 'a0', name: '20.99:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_111', weight: 1, source:'t55', target: 'a0', name: '21.33:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_112', weight: 1, source:'t56', target: 'a0', name: '21.42:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_113', weight: 1, source:'t57', target: 'a0', name: '21.08:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_114', weight: 1, source:'t58', target: 'a0', name: '21.74:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_115', weight: 1, source:'t59', target: 'a0', name: '21.81:IN2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_116', weight: 1, source:'t61', target: 'a0', name: '24.57:MK2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_117', weight: 1, source:'t62', target: 'a0', name: '27.33:MK2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_118', weight: 1, source:'t12', target: 'a0', name: '27.97:MK2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_119', weight: 1, source:'t15', target: 'a0', name: '28.38:MK2EN-test'}, classes: 'contributes_to'},
			{data: { id: 'e_120', weight: 1, source:'t19', target: 'a0', name: '28.44:MK2EN-test'}, classes: 'contributes_to'}
		]
	},
	layout: {
		name: 'cose',
		fit: true, // whether to fit the viewport to the graph
		padding: 20, // padding used on fit
		boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
		avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
		avoidOverlapPadding: 10, // extra spacing around nodes when avoidOverlap: true
		condense: true, // uses all available space on false, uses minimal space on true
		rows: undefined, // force num of rows in the grid
		cols: undefined, // force num of columns in the grid
		position: function( node ){}, // returns { row, col } for element
		sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
		animate: false, // whether to transition the node positions
		animationEasing: undefined, // easing of animation if enabled
		ready: undefined, // callback on layoutready
		stop: undefined // callback on layoutstop
	},
	ready: function(){
		window.cy = this;
	}
});
});