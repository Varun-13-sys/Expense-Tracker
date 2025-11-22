package com.dcl.expense_tracker.service;

import com.dcl.expense_tracker.model.Expense;
import com.dcl.expense_tracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository repo;

    public ExpenseService(ExpenseRepository repo) {
        this.repo = repo;
    }

    // ✅ Get expenses only for this device
    public List<Expense> getByDeviceId(String deviceId) {
        return repo.findByDeviceId(deviceId);
    }

    // Get expense by ID (still works normally)
    public Expense getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    // ✅ Add expense linked to deviceId
    public Expense add(Expense expense, String deviceId) {
        expense.setDeviceId(deviceId);     // <-- Set deviceId
        return repo.save(expense);
    }

    // Optional: If you want update to also stay device-specific
    public Expense update(Long id, Expense expense, String deviceId) {
        expense.setId(id);
        expense.setDeviceId(deviceId);
        return repo.save(expense);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
