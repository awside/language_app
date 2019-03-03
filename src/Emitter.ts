import nanoid from 'nanoid/non-secure'

export default class Emitter {
  static emitterList: Array<Iemitter> = []

  static emit(emitterName: string, args?: any) {
    Emitter.emitterList.forEach(e => {
      if (emitterName == e.name) {
        (args) ? e.callback(args) : e.callback()
      }
    })
  }

  static subscribe(emitterName: string, callback: (args?: any) => void): string | null {
    let doesSubscriberAlreadyExist = Emitter.emitterList.some(emitter => {
      return (callback == emitter.callback) ? true : false
    })
    if (doesSubscriberAlreadyExist) { return null }
    let id = nanoid()
    Emitter.emitterList.push({ id: id, name: emitterName, callback: callback })
    return id
  }

  static unsubscribe(id: string) {
    let a: Array<Iemitter> = []
    Emitter.emitterList.forEach(e => {
      if (id != e.id) { a.push(e) }
      Emitter.emitterList = a
    })
  }

}

interface Iemitter {
  id: string,
  name: string,
  callback: (args?: any) => void
}