type BasicSys = {
  type: string
  linkType: string
  id: string
}

type Tag = {
  name: string
  sys: {
    visibility: string
    type: string
    id: string
    space: {
      sys: BasicSys
    }
    environment: {
      sys: BasicSys
    }
    version: number
    createdAt: string
    updatedAt: string
    revision: number
  }
}

type File = {
  contentType: string
  fileName: string
  url: string
  details: {
    image: {
      width: number,
      height: number
    },
    size: number
  }
}

export interface IContentfulBaseStructure {
  fields: {
    title: string
    body: string
    photo?: { sys: Omit<BasicSys, 'linkType' | 'type'> }
    tags?: Tag[]
    chef?: { sys: Omit<BasicSys, 'linkType' | 'type'> }
    description?: string
    file?: File
  }
  metadata: {
    tags: BasicSys[]
  }
  sys: {
    id: string
    type: string
    version: number
    space: {
      sys: BasicSys
    }
    contentType: {
      sys: BasicSys
    }
    createdAt: string
    updatedAt: string
    revision: number
  }
}

export interface IEntries {
  sys: Omit<BasicSys, 'linkType' | 'id'>
  total: number
  skip: number
  limit: number
  items: IContentfulBaseStructure[]
}

export interface ITags {
  sys: {
    type: string
  }
  total: number
  skip: number
  limit: number
  items: Tag[]
}

export type { Tag, File }