create sequence seq as integer start with 1 increment by 1;

create table utilisateurs (
	idep varchar(6) primary key,
	role varchar(5) -- admin, gdom, gope
);

create table domaines (
	id integer primary key,
	description varchar(100)
);

create table operations (
	id integer primary key,
	description varchar(100),
	id_domaine integer
);
alter table operations add foreign key (id_domaine) references domaines (id);

create table habilitations_operations (
	idep varchar(6),
	id_operation integer
);
alter table habilitations_operations add foreign key (idep) references utilisateurs (idep);
alter table habilitations_operations add foreign key (id_operation) references operations (id);

create table habilitations_domaines (
	idep varchar(6),
	id_domaine integer
);
alter table habilitations_domaines add foreign key (idep) references utilisateurs (idep);
alter table habilitations_domaines add foreign key (id_domaine) references domaines (id);

create table template_modele (
	id integer primary key,
	date_creation timestamp,
	idep_creation varchar(6),
	date_derniere_modif timestamp,
	idep_derniere_modif varchar(6),
	description varchar(500),
	commentaire varchar(500),
	id_domaine integer
);
alter table template_modele add foreign key (idep_creation) references utilisateurs (idep);
alter table template_modele add foreign key (idep_derniere_modif) references utilisateurs (idep);
alter table template_modele add foreign key (id_domaine) references domaines (id);

create table template_mail (
	id integer primary key,
	expediteur varchar(200),
	objet varchar(500),
	corps_html varchar(100000),
	corps_brut varchar(100000),
	id_template_modele integer
);
alter table template_mail add foreign key (id_template_modele) references template_modele (id);

create table template_operationnel (
	id integer primary key,
	date_creation timestamp,
	idep_creation varchar(6),
	date_derniere_modif timestamp,
	idep_derniere_modif varchar(6),
	description varchar(500),
	commentaire varchar(500),
	id_operation integer,
	id_template_mail integer
);
alter table template_operationnel add foreign key (idep_creation) references utilisateurs (idep);
alter table template_operationnel add foreign key (idep_derniere_modif) references utilisateurs (idep);
alter table template_operationnel add foreign key (id_operation) references operations (id);
alter table template_operationnel add foreign key (id_template_mail) references template_mail (id);

create table variables_modele (
	id integer primary key,
	nom varchar(50),
	valeur varchar(500),
	id_template_operationnel integer
);
alter table variables_modele add foreign key (id_template_operationnel) references template_operationnel (id);

create table envois (
	id integer primary key,
	code varchar(50),
	tags varchar(500),
	date timestamp,
	id_operation integer,
);
alter table envois add foreign key (id_operation) references operations (id);

create table appels_spoc (
	id integer primary key,
	etat integer,
	date timestamp,
	xml_demande varchar (10000),
	json_retour varchar (10000),
	compteur_total integer,
	compteur_succes integer,
	id_envoi integer
);
alter table appels_spoc add foreign key (id_envoi) references envois (id);

create table archives_template_mail (
	id integer primary key,
	expediteur varchar(200),
	objet varchar(500),
	corps_html varchar(100000),
	corps_brut varchar(100000),
	description varchar(500),
	id_envoi integer
);
alter table archives_template_mail add foreign key (id_envoi) references envois (id);