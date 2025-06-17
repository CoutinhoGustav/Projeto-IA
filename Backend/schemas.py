from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Usuário
class UsuarioBase(BaseModel):
    nome: str
    cpf: str
    telefone: str

class UsuarioCreate(UsuarioBase):
    pass

class Usuario(UsuarioBase):
    id_usuario: int

    class Config:
        orm_mode = True


# Especialidade
class EspecialidadeBase(BaseModel):
    nome: str

class EspecialidadeCreate(EspecialidadeBase):
    pass

class Especialidade(EspecialidadeBase):
    id_especialidade: int

    class Config:
        orm_mode = True


# Médico
class MedicoBase(BaseModel):
    nome: str
    id_especialidade: int

class MedicoCreate(MedicoBase):
    pass

class Medico(MedicoBase):
    id_medico: int
    especialidade: Optional[Especialidade]

    class Config:
        orm_mode = True


# Horário
class HorarioBase(BaseModel):
    data_hora: datetime

class HorarioCreate(HorarioBase):
    pass

class Horario(HorarioBase):
    id_horario: int

    class Config:
        orm_mode = True


# Consulta
class ConsultaBase(BaseModel):
    id_especialidade: int
    id_medico: int

class ConsultaCreate(ConsultaBase):
    pass

class Consulta(ConsultaBase):
    id_consulta: int
    especialidade: Optional[Especialidade]
    medico: Optional[Medico]

    class Config:
        orm_mode = True


# Agendamento
class AgendamentoBase(BaseModel):
    id_horario: int
    id_medico: int
    id_usuario: int

class AgendamentoCreate(AgendamentoBase):
    pass

class Agendamento(AgendamentoBase):
    id_agendamento: int
    horario: Optional[Horario]
    medico: Optional[Medico]
    usuario: Optional[Usuario]

    class Config:
        orm_mode = True


# Verificação
class VerificacaoBase(BaseModel):
    id_horario: int
    id_consulta: int
    id_agendamento: int
    id_usuario: int

class VerificacaoCreate(VerificacaoBase):
    pass

class Verificacao(VerificacaoBase):
    id_verificacao: int
    horario: Optional[Horario]
    consulta: Optional[Consulta]
    agendamento: Optional[Agendamento]
    usuario: Optional[Usuario]

    class Config:
        orm_mode = True
