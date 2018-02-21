package fr.insee.relay.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.google.common.base.Objects;

@Entity
@Table(name = "variables_modele")
public class VariableModele {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "nom")
	private String nom;

	@Column(name = "valeur")
	private String valeur;

	@ManyToOne
	@JoinColumn(name = "id_template_operationnel")
	private TemplateOperationnel templateOperationnel;

	@Override
	public boolean equals(Object object) {
		if (object instanceof VariableModele) {
			VariableModele other = (VariableModele) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("VariableModele : %s = %s", nom, valeur);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getValeur() {
		return valeur;
	}

	public void setValeur(String valeur) {
		this.valeur = valeur;
	}

	public TemplateOperationnel getTemplateOperationnel() {
		return templateOperationnel;
	}

	public void setTemplateOperationnel(TemplateOperationnel templateOperationnel) {
		this.templateOperationnel = templateOperationnel;
	}
}
