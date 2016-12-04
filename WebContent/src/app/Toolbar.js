define(function(){
	
	var Toolbar = function(container){
		var d3Container = d3.select(container);
		var toolbarDiv = this.toolbarDiv = d3Container.append("div").classed("toolbar", true);
	};
	
	Toolbar.prototype.setup = function(){
		var toolbarData = [{
			className: "tool_button toolbar_line"
		},{
			className: "tool_button toolbar_pen"
		}];
		
		var toolButtons = this.toolbarDiv.selectAll("div").data(toolbarData).enter().append("div");
		
		var selectedToolButton = null;
		
		toolButtons.attr("class", function(d){
			return d.className;
		}).on("click", function(){
			// 将当前选择项失效，然后让新的选择项生效
			if(selectedToolButton){
				selectedToolButton.classed("tool_button_select", false);
			}
			
			selectedToolButton = d3.select(this) 
			selectedToolButton.classed("tool_button_select", true);
			
		});
		
		// 添加点击事件
	};
	
	return Toolbar;
	
});