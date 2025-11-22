package com.dcl.expense_tracker.controller;

import com.dcl.expense_tracker.model.Expense;
import com.dcl.expense_tracker.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = {
        "http://localhost:5173",
//         "https://varun-13-sys.github.io/Expense-tracker-frontend/"
})
public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }

    // ✅ Get all expenses for a specific device
    @GetMapping
    public List<Expense> getByDevice(
            @RequestHeader("X-Device-ID") String deviceId) {

        return service.getByDeviceId(deviceId);
    }

    // ✅ Get single expense by id
    @GetMapping("/{id}")
    public Expense getById(@PathVariable Long id) {
        return service.getById(id);
    }

    // ✅ Add new expense with deviceId
    @PostMapping
    public Expense add(
            @RequestHeader("X-Device-ID") String deviceId,
            @RequestBody Expense expense) {

        return service.add(expense, deviceId);
    }

    // ✅ Update expense (still tied to same device)
    @PutMapping("/{id}")
    public Expense update(
            @PathVariable Long id,
            @RequestHeader("X-Device-ID") String deviceId,
            @RequestBody Expense expense) {

        return service.update(id, expense, deviceId);
    }

    // ✅ Delete
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
