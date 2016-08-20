define(function(){
	
	var Editor = function(containerId){
		var container = this.container = d3.select("#" + containerId);
		var svg = this.svg = container.append("svg").attr("width", "100%").attr("height", "100%");
		
		var line = d3.line().curve(d3.curveBasis);

		svg.call(
			d3.drag()
			  .container(function(){return this;})
			  .subject(function(){var p = [d3.event.x, d3.event.y]; return [p, p];})
			  .on("start", dragStarted)
		);
				
		function dragStarted(){
			var d = d3.event.subject;
			var active = svg.append("path").datum(d);
			var x0 = d3.event.x;
			var y0 = d3.event.y;
			
			d3.event.on("drag", function(){
				var x1 = d3.event.x;
				var y1 = d3.event.y;
				var dx = x1 - x0;
				var dy = y1 - y0;
				
				if(dx * dx + dy * dy > 100){
					d.push([x0 = x1, y0 = y1]);
				}else{
					d[d.length - 1] = [x1, y1];
					active.attr("d", line);
				}
			});
		}
		
	};
	
	Editor.prototype.getValue = function(){
		return new XMLSerializer().serializeToString(this.svg.node());
	};
	
	return Editor;
	
});