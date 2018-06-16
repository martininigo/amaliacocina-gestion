package com.amaliacocina.gestion.recetas.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amaliacocina.gestion.recetas.model.BaseModel;

public interface BaseRepository<T extends BaseModel> extends JpaRepository<T, Serializable>  {

}
