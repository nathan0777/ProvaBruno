CREATE TABLE agendamentos 
(
	id INT IDENTITY PRIMARY KEY,
	locall VARCHAR(15),
	dataa VARCHAR(10),
	hora VARCHAR(5),
	motivo VARCHAR(30)
)

INSERT INTO agendamentos VALUES
('Sala de aula', '22/04/2023', '19:00', 'Aula Apoio')

SELECT * FROM agendamentos