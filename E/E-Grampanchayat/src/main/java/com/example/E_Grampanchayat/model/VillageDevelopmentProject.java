package com.example.E_Grampanchayat.model;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class VillageDevelopmentProject {

	@Id
	@GeneratedValue
	private int project_id;

	private String project_name;
	private String description;
	private Date start_date;
	private Date end_date;

	@Enumerated(EnumType.STRING)
	private Status status = Status.Planned;

	private double estimated_budget;
	private double actual_budget;

	public enum Status {
		Planned, Ongoing, Completed, Cancelled
	}

	public int getProject_id() {
		return project_id;
	}

	public void setProject_id(int project_id) {
		this.project_id = project_id;
	}

	public String getProject_name() {
		return project_name;
	}

	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public double getEstimated_budget() {
		return estimated_budget;
	}

	public void setEstimated_budget(double estimated_budget) {
		this.estimated_budget = estimated_budget;
	}

	public double getActual_budget() {
		return actual_budget;
	}

	public void setActual_budget(double actual_budget) {
		this.actual_budget = actual_budget;
	}

}
