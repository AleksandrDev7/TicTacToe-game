import React, {useState} from 'react'
import {Button, Modal} from 'semantic-ui-react'
import './styles.scss';

export default function ModalExampleControlled({textBtn}) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true)

    const handleClose = () => setModalOpen(false)

    return (
        <Modal
            trigger={<Button onClick={handleOpen}>{textBtn.name}</Button>}
            open={modalOpen}
            onClose={handleClose}
        >
            <Modal.Content>
                <h3>Небольшая инструкция по игре</h3>
                <p>Цель игры выстроить на девятиклеточном поле подряд 3 одинаковых фигуры (3 крестика или 3 нолика) по
                    горизонтали, по вертикали или по диагонали раньше, чем это сделает ваш партнер по игре. Игра в
                    крестики-нолики начинается с хода игрока, который ставит крестик в любой клетке на игровом поле три
                    на три (отметим сразу, что у него гораздо больше шансов выиграть, чем у противника). После этого
                    второй игрок ставит в любой свободной ячейке нолик. Затем снова ходит крестик. Потом опять нолик. И
                    так продолжается до тех пор, пока:</p>
                <ul>
                    <li>Кто-то из игроков не построит в ряд или по диагонали 3 крестика или 3 нолика, и в результате
                        чего
                        будет признан победителем;
                    </li>
                    <li>Не останется свободных клеток, и на поле не будет присутствовать трех идущих подряд одинаковых
                        фигур
                        — в этом случае объявляется ничья.
                    </li>
                </ul>

            </Modal.Content>
            <Modal.Actions>
                <Button onClick={handleClose} inverted>
                    Вернуться к игре
                </Button>
            </Modal.Actions>
        </Modal>
    )
}