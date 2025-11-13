package com.dcl.expense_tracker.service;

import com.dcl.expense_tracker.model.Expense;
import com.dcl.expense_tracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {
        private final ExpenseRepository repo;

        public ExpenseService(ExpenseRepository repo){
            this.repo = repo;
        }
        public List<Expense> getAll(){
            return repo.findAll();
        }
        public Expense getById(Long id) {
            return repo.findById(id).orElse(null);
        }
    public Expense add(Expense expense){
            return repo.save(expense);
        }
        public Expense update(Long id, Expense expense){
            expense.setId(id);
            return repo.save(expense);
        }
        public void delete(Long id){
            repo.deleteById(id);
        }
}
