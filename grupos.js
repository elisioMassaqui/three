//Group
const grupo = new THREE.Group()
scene.add(grupo)

grupo.position.y = -2

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff332})
)

grupo.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff53299})
)

grupo.add(cube2)
cube2.position.x += -2

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff55025})
)

grupo.add(cube3)
cube3.position.x += 2