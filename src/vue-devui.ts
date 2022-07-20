import type { App } from 'vue'

import ButtonInstall, { Button } from './button'
import TreeInstall, { Tree } from './tree'
import IconInstall, { Icon } from './icon'
import SpaceInstall, { Space } from './space'
import StagInstall, { Stag } from './tag'
import LayoutInstall, { Srow,Scol } from './layout'

import ContainerInstall, { Container, Header, Main,Footer,Aside } from './container'

const installs = [
	ButtonInstall,
  IconInstall,
  ContainerInstall,
  TreeInstall,
  SpaceInstall,
  LayoutInstall,
  StagInstall
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
  Space,
  Srow,
  Scol,
  Stag
}

export default {
  version: '1.0.0-rc.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
