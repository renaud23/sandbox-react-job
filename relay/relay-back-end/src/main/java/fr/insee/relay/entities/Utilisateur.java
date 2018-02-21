package fr.insee.relay.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.google.common.base.Objects;
import com.google.common.collect.Sets;

@Entity
@Table(name = "utilisateurs")
public class Utilisateur {

	@Id
	@Column(name = "idep")
	private String idep;

	@Column(name = "role")
	@Convert(converter = RoleConverter.class)
	private Role role;

	@ManyToMany
	@JoinTable(name = "habilitations_operations", joinColumns = @JoinColumn(name = "idep", referencedColumnName = "idep"), inverseJoinColumns = @JoinColumn(name = "id_operation", referencedColumnName = "id"))
	private Set<Operation> operations;

	@ManyToMany
	@JoinTable(name = "habilitations_domaines", joinColumns = @JoinColumn(name = "idep", referencedColumnName = "idep"), inverseJoinColumns = @JoinColumn(name = "id_domaine", referencedColumnName = "id"))
	private Set<Domaine> domaines = Sets.newHashSet();

	public Set<Domaine> getDomaines() {
		return domaines;
	}

	public void setDomaines(Set<Domaine> domaines) {
		this.domaines = domaines;
	}

	@Override
	public int hashCode() {
		return idep.hashCode();
	}

	@Override
	public boolean equals(Object object) {
		if (object instanceof Utilisateur) {
			Utilisateur other = (Utilisateur) object;
			return Objects.equal(this.idep, other.idep);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("Utilisateur : %s - %s", idep, role);
	}

	public String getIdep() {
		return idep;
	}

	public void setIdep(String idep) {
		this.idep = idep;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Set<Operation> getOperations() {
		return operations;
	}

	public void setOperations(Set<Operation> operations) {
		this.operations = operations;
	}

}
