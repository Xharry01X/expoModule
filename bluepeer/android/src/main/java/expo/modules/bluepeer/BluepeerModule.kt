package expo.modules.bluepeer


import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class BluepeerModule : Module(){
  override fun definition() = ModuleDefinition {
    Name("Bluepeer")

    Function("getTheme") {
      return@Function "system"
    }

  }
}