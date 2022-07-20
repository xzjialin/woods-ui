import type { App } from 'vue'

import ButtonInstall, { Button } from './button'
import TreeInstall, { Tree } from './tree'
import IconInstall, { Icon } from './icon'
import SpaceInstall, { Space } from './space'
import ContainerInstall, { Container, Header, Main,Footer,Aside } from './container'

const installs = [
	ButtonInstall,
  IconInstall,
  ContainerInstall,
  TreeInstall,
  SpaceInstall
]

export {
	Button,
  Icon,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Tree,
  Space
}

export default {
  version: '1.0.0-rc.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
