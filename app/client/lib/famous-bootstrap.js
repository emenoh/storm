//declare namespaces if they don't exist
window.App = window.App || {}
window.Famous = window.Famous || {}


Meteor.startup(function(){

  Famous.Engine = famous.core.FamousEngine
  Famous.DOMElement = famous.domRenderables.DOMElement
  Famous.Align = famous.components.Align
  Famous.Camera = famous.components.Camera
  Famous.Curves = famous.transitions.Curves
  Famous.Node = famous.core.Node
  Famous.GestureHandler = famous.components.GestureHandler
  Famous.Position = famous.components.Position
  Famous.Rotation = famous.components.Rotation
  Famous.Gravity3D = famous.physics.Gravity3D
  Famous.Particle = famous.physics.Particle
  Famous.PhysicsEngine = famous.physics.PhysicsEngine
  Famous.Spring = famous.physics.Spring
  Famous.Vec3 = famous.math.Vec3
 
  Famous.Mesh = famous.webglRenderables.Mesh
  Famous.Color = famous.utilities.Color
  Famous.Circle = famous.webglGeometries.Circle

})