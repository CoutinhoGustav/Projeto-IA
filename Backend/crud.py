from sqlalchemy.orm import Session
import models, schemas

# --- Usuários ---

def get_usuarios(db: Session):
    return db.query(models.Usuario).all()

def get_usuario(db: Session, usuario_id: int):
    return db.query(models.Usuario).filter(models.Usuario.id_usuario == usuario_id).first()

def create_usuario(db: Session, usuario: schemas.UsuarioCreate):
    novo_usuario = models.Usuario(
        nome=usuario.nome,
        cpf=usuario.cpf,
        telefone=usuario.telefone
    )
    db.add(novo_usuario)
    db.commit()
    db.refresh(novo_usuario)
    return novo_usuario

def update_usuario(db: Session, usuario_id: int, usuario: schemas.UsuarioCreate):
    usuario_db = db.query(models.Usuario).filter(models.Usuario.id_usuario == usuario_id).first()
    if not usuario_db:
        return None
    usuario_db.nome = usuario.nome
    usuario_db.cpf = usuario.cpf
    usuario_db.telefone = usuario.telefone
    db.commit()
    db.refresh(usuario_db)
    return usuario_db

def delete_usuario(db: Session, usuario_id: int):
    usuario_db = db.query(models.Usuario).filter(models.Usuario.id_usuario == usuario_id).first()
    if not usuario_db:
        return False
    db.delete(usuario_db)
    db.commit()
    return True

# --- Especialidades ---

def get_especialidades(db: Session):
    return db.query(models.Especialidade).all()

def get_especialidade(db: Session, especialidade_id: int):
    return db.query(models.Especialidade).filter(models.Especialidade.id_especialidade == especialidade_id).first()

def create_especialidade(db: Session, especialidade: schemas.EspecialidadeCreate):
    nova_especialidade = models.Especialidade(nome=especialidade.nome)
    db.add(nova_especialidade)
    db.commit()
    db.refresh(nova_especialidade)
    return nova_especialidade

def update_especialidade(db: Session, especialidade_id: int, especialidade: schemas.EspecialidadeCreate):
    especialidade_db = db.query(models.Especialidade).filter(models.Especialidade.id_especialidade == especialidade_id).first()
    if not especialidade_db:
        return None
    especialidade_db.nome = especialidade.nome
    db.commit()
    db.refresh(especialidade_db)
    return especialidade_db

def delete_especialidade(db: Session, especialidade_id: int):
    especialidade_db = db.query(models.Especialidade).filter(models.Especialidade.id_especialidade == especialidade_id).first()
    if not especialidade_db:
        return False
    db.delete(especialidade_db)
    db.commit()
    return True

# --- Médicos ---

def get_medicos(db: Session):
    return db.query(models.Medico).all()

def get_medico(db: Session, medico_id: int):
    return db.query(models.Medico).filter(models.Medico.id_medico == medico_id).first()

def create_medico(db: Session, medico: schemas.MedicoCreate):
    novo_medico = models.Medico(nome=medico.nome, id_especialidade=medico.id_especialidade)
    db.add(novo_medico)
    db.commit()
    db.refresh(novo_medico)
    return novo_medico

def update_medico(db: Session, medico_id: int, medico: schemas.MedicoCreate):
    medico_db = db.query(models.Medico).filter(models.Medico.id_medico == medico_id).first()
    if not medico_db:
        return None
    medico_db.nome = medico.nome
    medico_db.id_especialidade = medico.id_especialidade
    db.commit()
    db.refresh(medico_db)
    return medico_db

def delete_medico(db: Session, medico_id: int):
    medico_db = db.query(models.Medico).filter(models.Medico.id_medico == medico_id).first()
    if not medico_db:
        return False
    db.delete(medico_db)
    db.commit()
    return True

# --- Horários ---

def get_horarios(db: Session):
    return db.query(models.Horario).all()

def get_horario(db: Session, horario_id: int):
    return db.query(models.Horario).filter(models.Horario.id_horario == horario_id).first()

def create_horario(db: Session, horario: schemas.HorarioCreate):
    novo_horario = models.Horario(data_hora=horario.data_hora)
    db.add(novo_horario)
    db.commit()
    db.refresh(novo_horario)
    return novo_horario

def update_horario(db: Session, horario_id: int, horario: schemas.HorarioCreate):
    horario_db = db.query(models.Horario).filter(models.Horario.id_horario == horario_id).first()
    if not horario_db:
        return None
    horario_db.data_hora = horario.data_hora
    db.commit()
    db.refresh(horario_db)
    return horario_db

def delete_horario(db: Session, horario_id: int):
    horario_db = db.query(models.Horario).filter(models.Horario.id_horario == horario_id).first()
    if not horario_db:
        return False
    db.delete(horario_db)
    db.commit()
    return True

# --- Consultas ---

def get_consultas(db: Session):
    return db.query(models.Consulta).all()

def get_consulta(db: Session, consulta_id: int):
    return db.query(models.Consulta).filter(models.Consulta.id_consulta == consulta_id).first()

def create_consulta(db: Session, consulta: schemas.ConsultaCreate):
    nova_consulta = models.Consulta(
        id_especialidade=consulta.id_especialidade,
        id_medico=consulta.id_medico
    )
    db.add(nova_consulta)
    db.commit()
    db.refresh(nova_consulta)
    return nova_consulta

def update_consulta(db: Session, consulta_id: int, consulta: schemas.ConsultaCreate):
    consulta_db = db.query(models.Consulta).filter(models.Consulta.id_consulta == consulta_id).first()
    if not consulta_db:
        return None
    consulta_db.id_especialidade = consulta.id_especialidade
    consulta_db.id_medico = consulta.id_medico
    db.commit()
    db.refresh(consulta_db)
    return consulta_db

def delete_consulta(db: Session, consulta_id: int):
    consulta_db = db.query(models.Consulta).filter(models.Consulta.id_consulta == consulta_id).first()
    if not consulta_db:
        return False
    db.delete(consulta_db)
    db.commit()
    return True

# --- Agendamentos ---

def get_agendamentos(db: Session):
    return db.query(models.Agendamento).all()

def get_agendamento(db: Session, agendamento_id: int):
    return db.query(models.Agendamento).filter(models.Agendamento.id_agendamento == agendamento_id).first()

def create_agendamento(db: Session, agendamento: schemas.AgendamentoCreate):
    novo_agendamento = models.Agendamento(
        id_horario=agendamento.id_horario,
        id_medico=agendamento.id_medico,
        id_usuario=agendamento.id_usuario
    )
    db.add(novo_agendamento)
    db.commit()
    db.refresh(novo_agendamento)
    return novo_agendamento

def update_agendamento(db: Session, agendamento_id: int, agendamento: schemas.AgendamentoCreate):
    agendamento_db = db.query(models.Agendamento).filter(models.Agendamento.id_agendamento == agendamento_id).first()
    if not agendamento_db:
        return None
    agendamento_db.id_horario = agendamento.id_horario
    agendamento_db.id_medico = agendamento.id_medico
    agendamento_db.id_usuario = agendamento.id_usuario
    db.commit()
    db.refresh(agendamento_db)
    return agendamento_db

def delete_agendamento(db: Session, agendamento_id: int):
    agendamento_db = db.query(models.Agendamento).filter(models.Agendamento.id_agendamento == agendamento_id).first()
    if not agendamento_db:
        return False
    db.delete(agendamento_db)
    db.commit()
    return True

# --- Verificações ---

def get_verificacoes(db: Session):
    return db.query(models.Verificacao).all()

def get_verificacao(db: Session, verificacao_id: int):
    return db.query(models.Verificacao).filter(models.Verificacao.id_verificacao == verificacao_id).first()

def create_verificacao(db: Session, verificacao: schemas.VerificacaoCreate):
    nova_verificacao = models.Verificacao(
        id_horario=verificacao.id_horario,
        id_consulta=verificacao.id_consulta,
        id_agendamento=verificacao.id_agendamento,
        id_usuario=verificacao.id_usuario
    )
    db.add(nova_verificacao)
    db.commit()
    db.refresh(nova_verificacao)
    return nova_verificacao

def update_verificacao(db: Session, verificacao_id: int, verificacao: schemas.VerificacaoCreate):
    verificacao_db = db.query(models.Verificacao).filter(models.Verificacao.id_verificacao == verificacao_id).first()
    if not verificacao_db:
        return None
    verificacao_db.id_horario = verificacao.id_horario
    verificacao_db.id_consulta = verificacao.id_consulta
    verificacao_db.id_agendamento = verificacao.id_agendamento
    verificacao_db.id_usuario = verificacao.id_usuario
    db.commit()
    db.refresh(verificacao_db)
    return verificacao_db

def delete_verificacao(db: Session, verificacao_id: int):
    verificacao_db = db.query(models.Verificacao).filter(models.Verificacao.id_verificacao == verificacao_id).first()
    if not verificacao_db:
        return False
    db.delete(verificacao_db)
    db.commit()
    return True
